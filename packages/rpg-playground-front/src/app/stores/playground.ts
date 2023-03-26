import { ChildStore, RootStore } from './index'
import { makeAutoObservable } from 'mobx'
import { SessionCharacterType } from '../../ @types/characterType'
import { GAME_SESSION } from '../../mocks/session'

type PlaygroundMode = 'roleplay' | 'preparing' | 'fight'

export class Playground implements ChildStore {
  stage: PlaygroundMode = 'roleplay'
  id: string | undefined = undefined
  characters: SessionCharacterType[] = []
  loading = true

  constructor(public root: RootStore) {
    makeAutoObservable(this)
  }

  get masterCharacters() {
    return this.characters.filter((character) => character.type === 'enemy' || character.type === 'npc')
  }

  get playersCharacters() {
    return this.characters.filter((character) => character.type === 'player')
  }

  getCharacterById = (id: string) => {
    return this.characters?.find((character) => character.id === id)
  }

  setData = (session: typeof GAME_SESSION) => {
    this.stage = 'roleplay'
    this.id = session.id
    this.characters = session.active_characters
    this.loading = false
  }

  setStage = (newMode: PlaygroundMode) => {
    this.stage = newMode
  }
}
