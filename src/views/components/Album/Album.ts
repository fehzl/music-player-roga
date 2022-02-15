import { Player as PlayerModel } from '~/models/Player';
import { html, mounted } from '~/utils';
import { playAudio } from '~/utils/audio';
import { getAllHTMLElementsByClass, jumpLineBeforeLastWord } from '~/utils/helpers';
import './Album.css';

interface AlbumProps {
  album: AlbumData;
  player: PlayerModel;
  audio: HTMLAudioElement;
  albumIndex: number;
}

export function Album({ album, player, audio, albumIndex }: AlbumProps) {
  mounted(() => {
    getAllHTMLElementsByClass('.album-tracks--track').forEach((el: HTMLElement) => {
      el.addEventListener('click', () => {
        player.playing = true;
        player.trackIndex = Number(el.dataset.index) || 0;
        player.albumIndex = Number(el.dataset.albumIndex) || 0;
        playAudio({ player, audio });
      });
    });
  });

  return html`
    <section class="album-wrapper" id="album-${albumIndex}">
      <div class="album-header">
        <img src="${album.cover}" width="92px" height="92px" alt="Álbum ${album.title} de ${album.artist}" />
        <div class="album-header--album-info">
          <h1 class="album-header--title">${jumpLineBeforeLastWord(album.title)}</h1>
          <h2 class="album-header--subtitle">${album.artist}</h2>
        </div>
      </div>
      <div class="album-tracks">
        ${album.tracks
          .map((track, index) => {
            return html`
              <button
                class="album-tracks--track"
                id="track-${index}"
                data-index=${index}
                data-album-index=${albumIndex}
              >
                <span>${String(index + 1).padStart(2, '0')}. ${track.title}</span>
              </button>
            `;
          })
          .join('')}
      </div>
    </section>
  `;
}
