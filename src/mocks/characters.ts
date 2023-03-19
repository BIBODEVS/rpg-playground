import { CharacterType } from "../ @types/characterType";

export const MOCK_CHARACTERS: CharacterType[] = [
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Бутер Светоносный",
    maxHealth: 24,
    inventory: [],
    type: "player",
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Эльф Извращенец",
    maxHealth: 30,
    inventory: [],
    type: "player",
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Великолепный Бард",
    maxHealth: 12,
    inventory: [],
    type: "player",
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Хитрый Полурослик",
    maxHealth: 15,
    inventory: [],
    type: "player",
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Виверна",
    maxHealth: 100,
    inventory: [],
    type: "enemy",
  },
];
