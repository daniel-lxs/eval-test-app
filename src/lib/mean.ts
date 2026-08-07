/** Arithmetic mean of an array of numbers. */
export function mean(values: number[]): number {
  return values.length === 0 ? NaN : values.reduce((t, v) => t + v, 0) / values.length;
}
