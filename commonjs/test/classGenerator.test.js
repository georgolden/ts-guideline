'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createInstance = exports.classGenerator = void 0;
const classGenerator = () =>
  class DynamicGeneratedClass {
    args;
    constructor(...args) {
      this.args = args;
    }
    summary() {
      return this.args.reduce((a, b) => a + b, 0);
    }
  };
exports.classGenerator = classGenerator;
const createInstance = () => {
  const Construct = classGenerator();
  return new Construct(1, 2, 3);
};
exports.createInstance = createInstance;
const instance = createInstance();
instance.summary();
