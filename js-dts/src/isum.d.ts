export function sum(a: number, b: number): number;

export interface ISummator {
  args: number[];
  summary(): number;
}
