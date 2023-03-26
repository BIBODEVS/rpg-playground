export type InventoryItemType = {
  name: string
  description: string
  amount: number
}

export type CharacterRoleType = 'player' | 'enemy' | 'npc'

export type CharacterType = {
  id: string
  name: string
  type: CharacterRoleType
}

export type SessionCharacterType = CharacterType & {
  maxHealth: number
  health: number
  inventory: Array<InventoryItemType>
  initiative: number
}
