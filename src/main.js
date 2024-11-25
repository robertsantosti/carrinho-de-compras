import { Carrinho } from "./model/Carrinho/Carrinho.js";
import { Cardapio } from "./utils/Cardapio.js";

const main = async () => {
  const carrinho = new Carrinho();

  await carrinho.adicionar(Cardapio.HAMBURGUER_SIMPLES);
  await carrinho.adicionar(Cardapio.HAMBURGUER_SIMPLES);
  await carrinho.adicionar(Cardapio.REFRIGERANTE_LATA);

  carrinho.verCarrinho();
  carrinho.verTotal();
};

main();
