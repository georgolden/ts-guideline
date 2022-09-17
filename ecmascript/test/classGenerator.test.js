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
const createInstance = () => {
  const Construct = classGenerator();
  return new Construct(1, 2, 3);
};
const instance = createInstance();
instance.summary();
export { classGenerator, createInstance };
