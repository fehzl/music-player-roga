import { Player as PlayerModel } from '~/models/Player';
import { html, mounted } from '~/utils';
import { pauseAudio, playAudio } from '~/utils/audio';
import './Player.css';

interface PlayerProps {
  player: PlayerModel;
  audio: HTMLAudioElement;
}

export function Player({ player, audio }: PlayerProps) {
  mounted(function () {
    const prevButton = document.querySelector('.player-controls--prev');
    const playButton = document.querySelector('.player-controls--play');
    const nextButton = document.querySelector('.player-controls--next');
    const progress = document.querySelector<HTMLElement>('.player-progress');

    progress?.addEventListener('click', (e: MouseEvent) => {
      const progressWidth = (e.offsetX / progress.offsetWidth) * 100;
      audio.currentTime = (progressWidth / 100) * audio.duration;
    });

    prevButton?.addEventListener('click', () => {
      player.prevTrack();
      playAudio({ player, audio });
    });

    playButton?.addEventListener('click', () => {
      if (!player.playing) {
        playAudio({ player, audio });
      } else if (player.playing) {
        pauseAudio({ player, audio });
      }
    });

    nextButton?.addEventListener('click', () => {
      player.prevTrack();
      playAudio({ player, audio });
    });
  });

  const convertTimeToMMss = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed(0)}`;
  };

  audio.ontimeupdate = () => {
    const progressBarMarker = document.querySelector<HTMLElement>(
      '.player-progress--marker'
    );
    const progressTimeCurrent = document.querySelector<HTMLElement>(
      '.player-progress--time--current'
    );
    const progressTimeTotal = document.querySelector<HTMLElement>(
      '.player-progress--time--total'
    );

    const currentTime = convertTimeToMMss(audio.currentTime);
    const totalTime = convertTimeToMMss(audio.duration);

    progressTimeCurrent!.innerHTML = `${currentTime}`;
    progressTimeTotal!.innerHTML = `${totalTime}`;
    progressBarMarker!.style.left = `calc(${
      (audio.currentTime / audio.duration) * 100
    }% - 6px)`;
  };

  audio.onended = () => {
    player.nextTrack();
    playAudio({ player, audio });
  };

  return html` <div class="player-wrapper">
    <div class="player-controls--info">
      <p></p>
    </div>
    <div class="player-progress">
      <div class="player-progress--progress">
        <div class="player-progress--bar"></div>
        <div class="player-progress--marker"></div>
      </div>
      <div class="player-progress--time">
        <span class="player-progress--time--current">0:00</span>
        <span class="player-progress--time--total">0:00</span>
      </div>
    </div>
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
