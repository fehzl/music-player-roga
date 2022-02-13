import { Album } from './Album';

export class Playlist implements PlaylistType {
  readonly albums: AlbumType[];

  constructor(albums: AlbumType[] = []) {
    this.albums = albums;
  }

  addAlbum(data: AlbumData) {
    this.albums.push(new Album(data));
  }

  isFirstAlbum(index: number): boolean {
    return index === 0;
  }

  isLastAlbum(index: number): boolean {
    return index === this.albums.length - 1;
  }
}
