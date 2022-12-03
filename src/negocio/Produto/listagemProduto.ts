import Produto from "../../modelo/produto";
import Listagem from "../listagem";

export default class ListagemProduto extends Listagem {
    private produtos: Array<Produto>;
    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos
    }
    public listagem(): void {
        console.log(`\nListagem de todos os Produtos existentes: \n`)
        this.produtos.forEach((produto, index) => {
            console.log(`--------------------------------------`);
            console.log(`${index + 1} - ` + produto.nome + `\nR$` + produto.preco);
            console.log(`--------------------------------------`);
        })
    }
}