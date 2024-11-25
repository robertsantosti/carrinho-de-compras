import { getPrecoFormatado } from "../../utils/FormatarNumeros.js";

export class Carrinho {
  itens = [];

  adicionar = async (item) => {
    const itemExistente = this.itens.find((i) => i.codigo === item.codigo);

    !!itemExistente
      ? await this._atualizarItem(itemExistente)
      : await this._adicionarItem(item);
  };

  remover = async (codigo) => {
    const itemExistente = this.itens.find((i) => i.codigo === codigo);

    itemExistente.quantidade > 1
      ? await this._atualizarItem(itemExistente, true)
      : await this._removerItem(item.codigo);
  };

  _adicionarItem = async (item) => {
    this.itens.push({ ...item, quantidade: 1 });

    console.log(`Item ${item.nome.toUpperCase()} adicionado ao carrinho`);
  };

  _atualizarItem = async (item, remover = false) => {
    this.itens[this.itens.indexOf(item)] = {
      ...item,
      quantidade: remover ? item.quantidade - 1 : item.quantidade + 1,
    };

    console.log(
      `Item ${item.nome.toUpperCase()} foi ${
        remover ? "removido" : "atualizado"
      } 1 unidade no carrinho`
    );
  };

  _removerItem = async (codigo) => {
    this.itens = this.itens.filter((item) => item.codigo !== codigo);

    console.log(`Item ${item.nome.toUpperCase()} adicionado ao carrinho`);
  };

  _total = () => {
    const result = this.itens.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );

    return result;
  };

  verCarrinho = () => {
    console.log("\nItens do carrinho\n");

    this.itens.map((item) => {
      const total = item.preco * item.quantidade;

      console.log(
        `${item.codigo} - ${item.nome} | Quantidade: ${
          item.quantidade
        } | Preço: ${getPrecoFormatado(
          item.preco
        )} | Subtotal: ${getPrecoFormatado(total)}`
      );
    });
  };

  verTotal = () => {
    console.log(
      `\nO valor total do carrinho é ${getPrecoFormatado(this._total())}`
    );
  };
}
