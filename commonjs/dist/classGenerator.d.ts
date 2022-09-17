declare const classGenerator: () => {
    new (...args: number[]): {
        args: number[];
        summary(): number;
    };
};
declare const createInstance: () => {
    args: number[];
    summary(): number;
};
export { classGenerator, createInstance };
