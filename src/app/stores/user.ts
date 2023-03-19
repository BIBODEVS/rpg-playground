import { ChildStore, RootStore } from "./index";
import { makeAutoObservable } from "mobx";

export class User implements ChildStore {
  type: "player" | "master";
  constructor(public root: RootStore) {
    makeAutoObservable(this);
    this.type = "player";
  }
}
