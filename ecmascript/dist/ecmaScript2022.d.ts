interface AppIface {
    name: string;
    root: App;
}
export declare class App implements AppIface {
    #private;
    static from(name: string): App;
    name: string;
    constructor(name: string);
    set root(value: App);
    addChild(child: App): void;
}
export {};
