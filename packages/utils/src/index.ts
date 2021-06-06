export function roll(roll: string): string {
  return `I rolled a dice: ${roll}. Outcome grim`;
}

export function useClipBoard(text: string): void {
  navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);
}
