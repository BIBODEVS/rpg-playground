import { makeAutoObservable } from "mobx";
import { User } from "./user";
import { Modals } from "./modals";

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = new User(this);
  modals = new Modals(this);
}

export const rootStore = new RootStore();

export interface ChildStore {
  root?: RootStore;
  parent?: ChildStore;
}
