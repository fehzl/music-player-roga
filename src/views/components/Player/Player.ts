import { Player as PlayerModel } from "~/models/Player";
import { html, mounted } from "~/utils";
import { pauseAudioOnUnmount, playAudioOnMounted } from "~/utils/audio";
import { playAudio } from "~/utils/play-audio";
import "./Player.css";

interface PlayerProps {
  player: PlayerModel;
  audio: HTMLAudioElement;
}

export function Player({ player, audio }: PlayerProps) {
  mounted(function() {
    const prevButton = document.querySelector(".player-controls--prev");
    const playButton = document.querySelector(".player-controls--play");
    const nextButton = document.querySelector(".player-controls--next");

    prevButton?.addEventListener("click", () => {
      console.log("prev");
    });

    playButton?.addEventListener("click", () => {
      if(!player.playing) {
        playAudioOnMounted({ player, audio });
      } else if (audio.src && player.playing) {
        pauseAudioOnUnmount({ player, audio });
      }
    });

    nextButton?.addEventListener("click", () => {
      console.log("next");
    });
  })

  return html`
    <div class="player-wrapper">
      <button class="player-controls--prev">
        <img src="/img/prev.svg" width="32px" alt="Faixa anterior">
      </button>
      <button class="player-controls--play">
        <img src="/img/play.svg" width="58px" alt="Play">
      </button>
      <button class="player-controls--next">
        <img src="/img/next.svg" width="32px" alt="Próxima faixa">
      </button>
    </div>`
}