/**
 * @typedef {import('./isum').sum} sum;
 * @typedef {import('./isum').ISummator} ISummator;
 */

/** @type {sum} */
export const sum = (a, b) => a + b;

/** @implements {ISummator} */
export class Summator {
  /** @arg {number[]} args */
  constructor(...args) {
    this.args = args;
  }

  summary() {
    return this.args.reduce((a, b) => a + b, 0);
  }
}
