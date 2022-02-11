import { html } from "~/utils";
import "./Player.css";

export function Player() {
  return html`
    <div class="player-wrapper">
      <button>
        <img src="/img/prev.svg" width="32px" alt="Faixa anterior">
      </button>
      <button>
        <img src="/img/play.svg" width="58px" alt="Play">
      </button>
      <button>
        <img src="/img/next.svg" width="32px" alt="Próxima faixa">
      </button>
    </div>`
}