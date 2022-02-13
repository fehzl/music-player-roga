import { Album } from './Album';
import { Playlist } from './Playlist';

export class Player implements PlayerType {
  album: AlbumType | null;
  playing: boolean;
  playlist: PlaylistType;
  trackUrl: string | null;
  _albumIndex: number;
  _trackIndex: number;

  constructor() {
    this.album = new Album({} as AlbumData);
    this.playlist = new Playlist();
    this.trackUrl = null;
    this.playing = false;
    this._albumIndex = 0;
    this._trackIndex = 0;
  }

  public set albumIndex(index: number) {
    if (index && index < this.playlist.albums.length) {
      this._albumIndex = index;
    } else {
      this._albumIndex = 0;
    }
    this._albumIndex = this.albumIndex;
  }

  public set trackIndex(index: number) {
    if (index && index < this.playlist.albums[this._albumIndex].tracks.length) {
      this._trackIndex = index;
    }
    this._trackIndex = this.trackIndex;
  }

  public get albumIndex(): number {
    return this._albumIndex;
  }

  public get trackIndex(): number {
    return this._trackIndex;
  }

  play(): void {
    this.album = this.playlist.albums[this._albumIndex];
    this.trackUrl = this.album.getUrlFromIndex(this._trackIndex);
    this.playing = true;
  }

  pause(): void {
    this.playing = false;
  }

  nextTrack(): void {
    if (this.album?.isLastTrack(this._trackIndex)) {
      if (this.playlist.isLastAlbum(this._albumIndex)) {
        this._albumIndex = 0;
      } else {
        this._albumIndex++;
      }

      this.album = this.playlist.albums[this._albumIndex];
      this._trackIndex = 0;
    } else {
      this._trackIndex++;
    }

    this.album = this.playlist.albums[this._albumIndex];
    this.trackUrl = this.album.getUrlFromIndex(this._trackIndex);
  }

  prevTrack(): void {
    if (this.album?.isFirstTrack(this._trackIndex)) {
      if (this.playlist.isFirstAlbum(this._albumIndex)) {
        this._albumIndex = this.playlist.albums.length - 1;
      } else {
        this._albumIndex--;
      }

      this.album = this.playlist.albums[this._albumIndex];
      this._trackIndex = this.album.tracks.length - 1;
    } else {
      this._trackIndex--;
    }

    this.album = this.playlist.albums[this._albumIndex];
    this.trackUrl = this.album.getUrlFromIndex(this._trackIndex);
  }
}
