import { Player as PlayerModel } from "~/models/Player";
import { mounted } from ".";


interface PlayAudioProps {
  player: PlayerModel;
  audio: HTMLAudioElement;
}

export async function playAudioOnMounted({ player, audio }: PlayAudioProps) {
  audio.src = player.playlist.albums[0].tracks[0].url;
  audio.play();
  player.play()
  console.log(player)
}

export function pauseAudioOnUnmount({ player, audio }: PlayAudioProps) {
  mounted(() => {
    audio.pause();
    player.pause();
  });
}