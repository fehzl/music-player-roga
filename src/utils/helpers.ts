export function getHTMLElementByQuery(query: string): HTMLElement | null {
  return document.querySelector(query) || null;
}

export function getAllHTMLElementsByQuery(query: string): HTMLElement[] {
  return Array.from(document.querySelectorAll(query));
}

export function getElementById(id: string): HTMLElement | null {
  return document.getElementById(id) || null;
}

export function addEventListenerByQuery(
  query: string,
  event: string,
  callback: (e: any) => void
) {
  const element = getHTMLElementByQuery(query);
  element?.addEventListener(event, callback);
}

export function getElementWidthByQuery(query: string): number {
  const element = getHTMLElementByQuery(query);
  return element?.offsetWidth || 0;
}

export function innerHTMLByQuery(query: string, html: string): void {
  const element = getHTMLElementByQuery(query);
  element!.innerHTML = html || '';
}

export function setElementStyleByQuery(
  query: string,
  style: string,
  value: string
): void {
  const element = getHTMLElementByQuery(query);
  element?.style.setProperty(style, value);
}

export function ssToMMss(seconds: number): string {
  let min: any = Math.floor(seconds / 60);
  let sec: any = Math.floor(seconds % 60);

  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  return `${min}:${sec}`;
}

export function changeImageElementSrc(id: string, src: string): void {
  const element = <HTMLImageElement>document.getElementById(id);
  element!.src = src || '';
}

export function jumpLineBeforeLastWord(sentence: string): string {
  const words = sentence.split(' ');
  const lastWord = words[words.length - 1];
  const beforeLastWord = words[words.length - 2];
  return `${beforeLastWord}<br/> ${lastWord}`;
}

export function addActiveClassToCurrentTrack(
  queryToRemove: string,
  queryToAdd: string
): void {
  const toRemove = getAllHTMLElementsByQuery(queryToRemove);
  const toAdd = getHTMLElementByQuery(queryToAdd);
  toRemove.forEach((track: HTMLElement) => {
    track.classList.remove('active');
  });
  toAdd?.classList.add('active');
}
