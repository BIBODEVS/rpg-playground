export type InventoryItemType = {
  name: string;
  description: string;
  amount: number;
};

export type CharacterRoleType = "player" | "enemy" | "npc";

export type CharacterType = {
  id: string;
  name: string;
  maxHealth: number;
  inventory: Array<InventoryItemType>;
  type: CharacterRoleType;
};
