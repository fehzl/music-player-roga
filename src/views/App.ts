import { html } from '~/utils';
import './App.css';
import { Album } from './components/Album/Album';
import { Player as PlayerMenu } from './components/Player/Player';
import AlbumsMock from '../mocks/albums.json'
import { Playlist } from '~/models/Playlist';
import { Player } from '~/models/Player';

export function App() {
  const getAlbums = () => {
    const albums: AlbumData[] = AlbumsMock; 
    return albums;
  }

  const audio = new Audio();
  const playlist = new Playlist();
  const albums = getAlbums();
  const player = new Player();

  albums.map(album => {
    playlist.addAlbum(album);
  });

  player.playlist = playlist;

  return html`
    <div class="App">
      ${playlist.albums.map((album) => {
        return Album({ album });
      }).join('')} 

      ${PlayerMenu({player, audio})}
    </div>
  `;
}
