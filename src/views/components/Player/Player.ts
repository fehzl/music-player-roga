import { Player as PlayerModel } from '~/models/Player';
import { html, mounted } from '~/utils';
import { pauseAudio, playAudio } from '~/utils/audio';
import { addEventListenerByQuery, getElementWidthByQuery } from '~/utils/helpers';
import './Player.css';
import { Timer } from './Timer/Timer';

interface PlayerProps {
  player: PlayerModel;
  audio: HTMLAudioElement;
}

export function Player({ player, audio }: PlayerProps) {
  mounted(function () {
    addEventListenerByQuery('.player-controls--prev', 'click', () => {
      player.prevTrack();
      playAudio({ player, audio });
    });

    addEventListenerByQuery('.player-controls--play', 'click', () => {
      if (!player.playing) {
        playAudio({ player, audio });
      } else {
        pauseAudio({ player, audio });
      }
    });

    addEventListenerByQuery('.player-controls--next', 'click', () => {
      player.nextTrack();
      playAudio({ player, audio });
    });

    addEventListenerByQuery('.player-progress', 'click', (e: MouseEvent) => {
      const elementWidth = getElementWidthByQuery('.player-progress');
      const progressWidth = (e.offsetX / elementWidth) * 100;
      audio.currentTime = (progressWidth / 100) * audio.duration;
    });

    audio.onended = () => {
      player.nextTrack();
      playAudio({ player, audio });
    };
  });

  return html` <div class="player-wrapper">
    <div class="player-controls--info">
      <p></p>
    </div>
    ${Timer({ audio })}
    <div class="player-controls">
      <button class="player-controls--prev">
        <img src="/img/prev.svg" width="32px" alt="Faixa anterior" />
      </button>
      <button class="player-controls--play">
        <img
          src="/img/play.svg"
          width="58px"
          alt="Play"
          id="player-controls--play"
        />
      </button>
      <button class="player-controls--next">
        <img src="/img/next.svg" width="32px" alt="Próxima faixa" />
      </button>
    </div>
  </div>`;
}
