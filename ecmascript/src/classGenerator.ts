const classGenerator = () =>
  class DynamicGeneratedClass {
    args: number[];
    constructor(...args: number[]) {
      this.args = args;
    }
    summary(): number {
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
