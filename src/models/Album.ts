export class Album implements AlbumType {
  readonly artist: string;
  readonly cover: string;
  readonly title: string;
  readonly tracks: TrackData[];

  constructor(data: AlbumData) {
    this.artist = data.artist;
    this.cover = data.cover;
    this.title = data.title;
    this.tracks = data.tracks;
  }

  getUrlFromIndex(index: number): string | null {
    const track = this.tracks[index];
    return track ? track.url : null;
  }

  isFirstTrack(index: number): boolean {
    const track = this.tracks[index];
    return track && track.url === this.tracks[0].url;
  }

  isLastTrack(index: number): boolean {
    const track = this.tracks[index];
    return track && track.url === this.tracks[this.tracks.length - 1].url;
  }
}
