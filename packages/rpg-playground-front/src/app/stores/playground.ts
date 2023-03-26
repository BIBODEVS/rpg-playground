import { ChildStore, RootStore } from './index'
import { makeAutoObservable } from 'mobx'
import { SessionCharacterType } from '../../ @types/characterType'
import { MOCK_CHARACTERS } from '../../mocks/characters'

type PlaygroundMode = 'roleplay' | 'preparing' | 'fight'

export class Playground implements ChildStore {
  stage: PlaygroundMode = 'roleplay'
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

  setData = () => {
    this.stage = 'roleplay'
    this.characters = MOCK_CHARACTERS
    this.loading = false
  }

  setStage = (newMode: PlaygroundMode) => {
    this.stage = newMode
  }
}
