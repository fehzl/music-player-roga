import { html } from "~/utils";
import "./Album.css";

export function Album() {
  return html`
    <div class="album-wrapper">
      <div class="album-header">
        <img src="/img/beethoven.png" width="92px" height="92px" alt="Album">
        <div class="album-header--album-info">
          <h1 class="album-header--title">Symphony<br/> Collection</h1>
          <h2 class="album-header--subtitle">Ludwig van Beethoven</h2>
        </div>
      </div>
      <ul class="album-tracks">
        <li class="active">
          <span>
          01. Symphony no. 1 in C, Op. 21 - I. Adagio molto - Allegro con brio</li>
          </span>
        </li>
        <li>
          <span>
            02. Symphony No. 3 in E Flat Major Eroica, Op. 55 - II. Marcia funebre Adagio assai</li>
          </span>
        </li>
        <li>
          <span>
            03. Symphony no. 4 in Bb, Op. 60 - IV. Allegro ma non troppo</li>
          </span>
        </li>
      </ul>
    </div>
  `;
}