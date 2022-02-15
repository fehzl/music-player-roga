export function getHTMLElementByClass(selector: string): HTMLElement | null {
  return document.querySelector(selector) || null;
}

export function getAllHTMLElementsByClass(selector: string): HTMLElement[] {
  return Array.from(document.querySelectorAll(selector));
}

export function getElementById(id: string): HTMLElement | null {
  return document.getElementById(id) || null;
}

export function addEventListenerByClass(element: string, event: string, callback: (e: any) => void) {
  const el = getHTMLElementByClass(element);
  el?.addEventListener(event, callback);
}

export function getElementWidthByClass(element: string): number {
  const el = getHTMLElementByClass(element);
  return el?.offsetWidth || 0;
}

export function innerHTMLByClass(element: string, html: string): void {
  const el = getHTMLElementByClass(element);
  el!.innerHTML = html || '';
}

export function setElementStyleByClass(element: string, style: string, value: string): void {
  const el = getHTMLElementByClass(element);
  el?.style.setProperty(style, value);
}

export function ssToMMss(seconds: number): string {
  let min: any = Math.floor(seconds / 60);
  let sec: any = Math.floor(seconds % 60);

  if (min < 10) min = '0' + min;
  if (sec < 10) sec = '0' + sec;

  return `${min}:${sec}`
}

export function jumpLineBeforeLastWord(line: string): string {
  const words = line.split(' ');
  const lastWord = words[words.length - 1];
  const beforeLastWord = words[words.length - 2];
  return `${beforeLastWord}<br/> ${lastWord}`;
}