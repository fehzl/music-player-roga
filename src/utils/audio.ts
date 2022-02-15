import { Player as PlayerModel } from '~/models/Player';

interface PlayAudioProps {
  player: PlayerModel;
  audio: HTMLAudioElement;
}

export async function playAudio({ player, audio }: PlayAudioProps) {
  const playingNow = document.querySelector('.player-controls--info p');
  const playButton = <HTMLImageElement>(
    document.getElementById('player-controls--play')
  );

  const currentTrack = document.querySelector(
    `#album-${player.albumIndex}  #track-${player.trackIndex}`
  );

  // remove active class from all tracks and add it to the current track
  const tracks = document.querySelectorAll('.album-tracks--track');
  tracks.forEach((track) => {
    track.classList.remove('active');
  });
  currentTrack?.classList.add('active');


  if (currentTrack) {
    currentTrack.classList.add('active');
  }


  playButton!.src = '/img/pause.svg';

  if (player.trackUrl && player.trackUrl !== audio.src) {
    audio.src = player.trackUrl;
  }

  audio.play();
  player.play();

  playingNow!.innerHTML = `${player.album?.artist} - ${
    player.album?.tracks[player.trackIndex].title
  }`;
}

export function pauseAudio({ player, audio }: PlayAudioProps) {
  const playButton = <HTMLImageElement>(
    document.getElementById('player-controls--play')
  );

  audio.pause();
  player.pause();
  playButton!.src = '/img/play.svg';
}
