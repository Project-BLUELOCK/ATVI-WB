import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class listagemClienteValor extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listagem(): void {
        let valorConsumido: any = []
        this.cliente.forEach((itens) => {
            let reducer = (soma, index) => soma + index;
            let nomes = itens.nome
            let mapValoresProduto = itens.getProdutosConsumidos.map(i => i.preco)
            let valorFinalProduto = mapValoresProduto.reduce(reducer)
            let mapValoresServico = itens.getServicosConsumidos.map(i => i.preco)
            let valorFinalServico = mapValoresServico.reduce(reducer)
            valorConsumido.push({
                nome: nomes,
                precosProdutos: valorFinalProduto,
                precosServicos: valorFinalServico
            })
        })
        let ordenacaoProdutos = valorConsumido.sort((
            a: { precosProdutos: number; },
            b: { precosProdutos: number; }) => {
            return (
                b.precosProdutos - a.precosProdutos
            );
        });
        let restricao = ordenacaoProdutos.slice(0, 5)
        console.log();
        console.log(`--------------------------------------`);
        console.log("Produtos que o público mais consumiu");
        restricao.forEach((consumidos: { nome: string, precosProdutos: number }) => {
            console.log(`Nome dos produtos consumidos: ${consumidos.nome}`);
            console.log(`Preço dos produtos consumidos R$: ${consumidos.precosProdutos}`);
            console.log();
        })
        
        let ordenacaoServicos = valorConsumido.sort((
            a: { precosServicos: number },
            b: { precosServicos: number }) => {
            return (
                b.precosServicos - a.precosServicos
            );
        });
        restricao = ordenacaoServicos.slice(0, 5)
        console.log(`--------------------------------------`);
        console.log("Serviços que o público mais consumiu");
        restricao.forEach((consumidos: { nome: string, precosServicos: number }) => {
            console.log(`Nome dos serviços consumidos: ${consumidos.nome}`);
            console.log(`Preço dos serviços consumidos R$: ${consumidos.precosServicos}`);
            console.log();
        })
        console.log(`--------------------------------------`);
    }
}