import { Player as PlayerModel } from '~/models/Player';
import { addActiveClassToCurrentTrack, changeImageElementSrc, innerHTMLByClass } from './helper';

interface PlayAudioProps {
  player: PlayerModel;
  audio: HTMLAudioElement;
}

export async function playAudio({ player, audio }: PlayAudioProps) {
  if (player.trackUrl && player.trackUrl !== audio.src) audio.src = player.trackUrl;
  
  changeImageElementSrc('player-controls--play', '/img/pause.svg');
  
  addActiveClassToCurrentTrack('.album-tracks--track', `#album-${player.albumIndex} #track-${player.trackIndex}`)

  audio.play();
  player.play();

  innerHTMLByClass('.player-controls--info p', 
  `${player.album?.tracks[player.trackIndex].title} - 
   ${player.album?.artist}`
  );
}

export function pauseAudio({ player, audio }: PlayAudioProps) {
  changeImageElementSrc('player-controls--play', '/img/play.svg');
  
  audio.pause();
  player.pause();
}
