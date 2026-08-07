/** Left-pad a string with a fill character to the target length. */
export function padStart(input: string, length: number, fill = ' '): string {
  return input.padStart(length, fill);
}
