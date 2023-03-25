import { SessionCharacterType } from "../ @types/characterType";

const getHealthValue = () => {
  const maxHealth = Math.round(Math.random() * 100);
  let health = Math.round(Math.random() * 100);
  if (health > maxHealth) health = maxHealth;
  return { health, maxHealth };
};

export const MOCK_CHARACTERS: SessionCharacterType[] = [
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Бутер Светоносный",
    ...getHealthValue(),
    inventory: [],
    type: "player",
    initiative: 0,
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Эльф Извращенец",
    ...getHealthValue(),
    inventory: [],
    type: "player",
    initiative: 0,
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Великолепный Бард",
    ...getHealthValue(),
    inventory: [],
    type: "player",
    initiative: 0,
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Хитрый Полурослик",
    ...getHealthValue(),
    inventory: [],
    type: "player",
    initiative: 0,
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Гоблин 1",
    ...getHealthValue(),
    inventory: [],
    type: "enemy",
    initiative: 0,
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Гоблин 2",
    ...getHealthValue(),
    inventory: [],
    type: "enemy",
    initiative: 0,
  },
  {
    id: `${Math.round(Math.random() * 100 + Math.random() * 100)}`,
    name: "Гоблин 3",
    ...getHealthValue(),
    inventory: [],
    type: "enemy",
    initiative: 0,
  },
];
