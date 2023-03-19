import { makeAutoObservable } from "mobx";
import { User } from "./user";
import { Modals } from "./modals";
import { Playground } from "./playground";

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = new User(this);
  modals = new Modals(this);
  playground = new Playground(this);
}

export const rootStore = new RootStore();

export interface ChildStore {
  root?: RootStore;
  parent?: ChildStore;
}
