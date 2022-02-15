import { html, mounted } from "~/utils";
import { innerHTMLByQuery, setElementStyleByQuery, ssToMMss } from '~/utils/helpers';
import "./Timer.css";

interface TimerProps {
  audio: HTMLAudioElement;
}

export function Timer({ audio }: TimerProps) {
  mounted(function () {
    audio.ontimeupdate = () => {
      innerHTMLByQuery('.player-progress--time--current', ssToMMss(audio.currentTime) === "NaN:NaN" ? "00:00" : ssToMMss(audio.currentTime));
      innerHTMLByQuery('.player-progress--time--total', ssToMMss(audio.duration) === "NaN:NaN" ? "00:00" : ssToMMss(audio.duration));
      
      setElementStyleByQuery('.player-progress--marker', 'left', `calc(${(audio.currentTime / audio.duration) * 100}% - 4px)`);
      setElementStyleByQuery('.player-progress--bar', 'width', `calc(${(audio.currentTime / audio.duration) * 100}% + 4px)`);
    };
  });

  return html`
    <div class="player-progress">
      <div class="player-progress--progress">
        <div class="player-progress--bar"></div>
        <div class="player-progress--marker"></div>
      </div>
      <div class="player-progress--time">
        <span class="player-progress--time--current">00:00</span>
        <span class="player-progress--time--total">00:00</span>
      </div>
    </div>
  `
}