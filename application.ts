'use strict';

interface AppIface {
  name: string;
  root: App;
}

export class App implements AppIface {
  static from(name: string): App {
    return new App(name);
  }

  #root: App;
  #children: App[];
  name: string;
  constructor(name: string) {
    this.name = name;
    this.#root = this;
    this.#children = [];
  }

  set root(value: App) {
    this.#root = value;
  }

  addChild(child: App) {
    child.root = this;
    this.#children.push(child);
  }
}
