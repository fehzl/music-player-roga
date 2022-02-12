import { html } from "~/utils";
import "./Album.css";

interface AlbumProps {
  album: AlbumData;
}

export function Album({ album }: AlbumProps) {
  return html`
    <div class="album-wrapper">
      <div class="album-header">
        <img src="${album.cover}" width="92px" height="92px" alt="Album">
        <div class="album-header--album-info">
          <h1 class="album-header--title">${album.title}</h1>
          <h2 class="album-header--subtitle">${album.artist}</h2>
        </div>
      </div>
      <ul class="album-tracks">
        ${album.tracks.map((track, index) => {
          return html`
            <li class="album-tracks--track">
              <span>${index + 1}. ${track.title}</span>
            </li>
          `;
        }).join('')}
      </ul>
    </div>
  `;
}