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
