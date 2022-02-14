import { html, mounted } from "~/utils";
import { innerHTMLByClass, setElementStyleByClass, ssToMMss } from '~/utils/helper';

interface TimerProps {
  audio: HTMLAudioElement;
}

export function Timer({ audio }: TimerProps) {
  mounted(function () {
    audio.ontimeupdate = () => {
      innerHTMLByClass('.player-progress--time--current', ssToMMss(audio.currentTime));
      innerHTMLByClass('.player-progress--time--total', ssToMMss(audio.duration));
      
      setElementStyleByClass('.player-progress--marker', 'left', `${(audio.currentTime / audio.duration) * 100}%`);
      setElementStyleByClass('.player-progress--bar', 'width', `${(audio.currentTime / audio.duration) * 100}%`);
    };
  });

  return html`
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
  `
}