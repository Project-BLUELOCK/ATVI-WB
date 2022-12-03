import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemQuantidade extends Listagem {
    private cliente: Array<Cliente>
    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listagem(): void {
        let consumidores: any = []
        this.cliente.forEach(qnt => {
            let nomeCliente = qnt.nome
            let qntidadeConsumo = qnt.getProdutosConsumidos.length + qnt.getServicosConsumidos.length
            consumidores.push({ nome: nomeCliente, quantidade: qntidadeConsumo })
        })
        let ordenacao = consumidores.sort((a: { quantidade: number; }, b: { quantidade: number; }) => {
            return b.quantidade - a.quantidade;
        });
        let restricao = ordenacao.slice(0, 9)
        console.log(`--------------------------------------`);
        console.log(`Listagem dos 10 clientes que mais consumiram no estabelecimento (seja em produtos ou em serviços):`);
        restricao.forEach((consumidos: { nome: string; quantidade: string }) => {
            console.log(`Nome dos clientes que menos consumiram: ${consumidos.nome}`);
            console.log(`Quantidade total consumido por eles: ${consumidos.quantidade} itens`);
            console.log();
        })
        console.log(`--------------------------------------`);

    }
}