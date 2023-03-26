import { ChildStore, RootStore } from './index'
import { makeAutoObservable } from 'mobx'
import { CharacterType, SessionCharacterType } from '../../@types/characterType'
import { GAME_SESSION } from '../../mocks/session'
import { PlaygroundStageType } from '../../@types/playgroundTypes'

type InitiativeMap = Record<CharacterType['id'], number>

export class Playground implements ChildStore {
  stage: PlaygroundStageType = 'roleplay'
  id: string | undefined = undefined
  master_id: string | undefined = undefined
  characters: SessionCharacterType[] = []
  initiative: InitiativeMap | undefined = undefined
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

  get isMaster() {
    return this.master_id === this.root.user.id
  }

  getCharacterById = (id: string) => {
    return this.characters?.find((character) => character.id === id)
  }

  setData = (session: typeof GAME_SESSION) => {
    this.id = session.id
    this.stage = 'roleplay'
    this.master_id = session.master_id
    this.characters = session.active_characters
    this.loading = false
  }

  setStage = (newMode: PlaygroundStageType) => {
    this.stage = newMode
  }

  setInitiative = (data: InitiativeMap) => {
    this.initiative = data
  }
}
