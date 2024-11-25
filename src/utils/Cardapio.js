import { Item } from "../model/Item/Item.js";

const HAMBURGUER_SIMPLES = new Item(
  1,
  "Hamburguer simples",
  ["Pão", "Hamburguer", "Salada"],
  10
);

const REFRIGERANTE_LATA = new Item(
  2,
  "Refrigerante lata",
  ["Coca-Cola", "Fanta", "Sprite"],
  5
);

export const Cardapio = {
  HAMBURGUER_SIMPLES,
  REFRIGERANTE_LATA,
};
