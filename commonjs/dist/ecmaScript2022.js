"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
class App {
    static from(name) {
        return new App(name);
    }
    #root;
    #children;
    name;
    constructor(name) {
        this.name = name;
        this.#root = this;
        this.#children = [];
    }
    set root(value) {
        this.#root = value;
    }
    addChild(child) {
        child.root = this;
        this.#children.push(child);
    }
}
exports.App = App;
