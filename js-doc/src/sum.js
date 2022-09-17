/** @type {(a: number, b: number) => number} */
export const sum = (a, b) => a + b;

export class Summator {
  /** @arg {number[]} args */
  constructor(...args) {
    /** @type {number[]} */
    this.args = args;
  }
  /** @type {() => number} */
  summary() {
    return this.args.reduce((a, b) => a + b, 0);
  }
}
