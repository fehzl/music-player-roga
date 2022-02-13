import { Player as PlayerModel } from '~/models/Player';
import { html, mounted } from '~/utils';
import { playAudio } from '~/utils/audio';
import './Album.css';

interface AlbumProps {
  album: AlbumData;
  player: PlayerModel;
  audio: HTMLAudioElement;
  albumIndex: number;
}

export function Album({ album, player, audio, albumIndex }: AlbumProps) {
  mounted(() => {
    const tracks = document.querySelectorAll<HTMLButtonElement>(
      '.album-tracks--track'
    );

    tracks?.forEach((track) => {
      track?.addEventListener('click', () => {
        console.log(track.dataset)
        player.playing = true;
        player.trackIndex = Number(track.dataset.index) || 0;
        player.albumIndex = Number(track.dataset.albumIndex) || 0;
        playAudio({ player, audio });
      });
    });
  });

  return html`
    <div class="album-wrapper" id="album-${albumIndex}">
      <div class="album-header">
        <img src="${album.cover}" width="92px" height="92px" alt="Album" />
        <div class="album-header--album-info">
          <h1 class="album-header--title">${album.title}</h1>
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
    </div>
  `;
}
