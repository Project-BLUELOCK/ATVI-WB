import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Atualizar from "../atualizar";


export default class atualizarProduto extends Atualizar {
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>) {
        super()
        this.produto = produto
        this.entrada = new Entrada();
    }
    public atualizar(): void {
        console.log();
        console.log(`Listagem de todos os Produtos`);
        this.produto.forEach(p => {
            console.log(`Produto: ${p.nome}`);
        })
        console.log();
        let entrada = this.entrada.receberTexto(`Escolha qual produto deseja escrevendo o nome dele: `)
        let geralProd = this.produto.map(i => i.nome)
        let prodsele = geralProd.indexOf(entrada)

        if (prodsele == -1) {
            console.log(`Produto selecionado: ${entrada}, não existe, tente novamente`);
        } else {
            let Prodnewname = this.entrada.receberTexto(`Digite um novo nome para o Produto que deseja atualizar: `)
            let Prodnewprice = this.entrada.receberNumero(`Digite o novo preço do Produto que deseja atualizar: R$`)
            this.produto.filter(produto => produto.nome == entrada).map(i => i.preco = Prodnewprice).toString()
            this.produto.filter(produto => produto.nome == entrada).map(i => i.nome = Prodnewname ).toString()
            console.log(`Produto atualizado com sucesso`);
        }
    }
}