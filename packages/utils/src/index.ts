export function useClipBoard(text: string): void {
  navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);
}
