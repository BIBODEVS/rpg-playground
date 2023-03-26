import { ChildStore, RootStore } from './index'
import { makeAutoObservable } from 'mobx'

export class User implements ChildStore {
  role: 'player' | 'master' = 'master'
  constructor(public root: RootStore) {
    makeAutoObservable(this)
  }
}
