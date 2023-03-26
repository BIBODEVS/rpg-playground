import { ChildStore, RootStore } from './index'
import { makeAutoObservable } from 'mobx'

export class User implements ChildStore {
  id = '1'
  constructor(public root: RootStore) {
    makeAutoObservable(this)
  }
}
