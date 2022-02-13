import { html } from '~/utils';
import './App.css';
import { Album } from './components/Album/Album';
import { Player as PlayerMenu } from './components/Player/Player';
import AlbumsMock from '../mocks/albums.json';
import { Player } from '~/models/Player';

export function App() {
  const getAlbums = () => {
    const albums: AlbumData[] = AlbumsMock;
    return albums;
  };

  const player = new Player();
  const albums = getAlbums();
  const audio = new Audio();

  albums.map((album) => {
    player.playlist.addAlbum(album);
  });

  return html`
    <div class="App">
      ${player.playlist.albums
        .map((album, albumIndex) => {
          return Album({ album, player, audio, albumIndex });
        })
        .join('')}
      ${PlayerMenu({ player, audio })}
    </div>
  `;
}
