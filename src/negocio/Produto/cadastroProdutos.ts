import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nCadastre seu produto`);
        let produto = this.entrada.receberTexto(`Digite o nome do novo produto: `)
        let nomes = this.produtos.map(i => (i.nome))
        if (nomes.includes(produto)) {
            console.log(`O produto: ${produto}, já está cadastrado dentro do sistema`);
            console.log();
        } else {
            let valor = this.entrada.receberNumero(`Qual será o preço do produto? Em R$: `)
            let cadastro = new Produto(produto, valor);
            this.produtos.push(cadastro);
            console.log();
        }
    }
    public geracao(): void {
        let produtos = [
            "Shampoo", // 1
            "Kit de Hidratação Authentic Beauty", // 2
            "Esmalte", // 3
            "Condicionador", // 4
            "Máscara Hidratante", // 5
            "Batom", // 6
            "Base", // 7
            "Pó Compacto", // 8
            "Blush", // 9
            "Pincel", // 10
            "Pente", // 11
            "Escova", // 12
            "Creme para Pentear", // 13
            "Lixa de Unha", // 14
            "Removedor de Esmalte", // 15
            "Creme para as Mãos", // 16
            "Sabonete", // 17
            "Desodorante", // 18
            "Creme para os Pés", // 19
            "Creme para o Rosto", // 20
            "Creme para o Corpo", // 21
            "Tesoura de Cabeleleiro", // 22
            "Luva pra Tratamento Capilar", // 23
            "Cacheador", // 24
            "Prancha", // 25
   
        ]
        let preco = [
            20.00, // 1
            300.00, // 2
            10.00, // 3
            20.00, // 4
            30.00, // 5
            15.00, // 6
            25.00, // 7
            20.00, // 8
            15.00, // 9
            10.00, // 10
            10.00, // 11
            15.00, // 12
            20.00, // 13
            5.00, // 14
            10.00, // 15
            15.00, // 16
            10.00, // 17
            15.00, // 18
            15.00, // 19
            20.00, // 20
            20.00, // 21
            15.00, // 22
            10.00, // 23
            250.00, // 24
            300.00, // 25
        ]
        let sliceProdutos = produtos.slice();
        let sliceProdutosPreco = preco.slice()
        for (let index = 0; index < sliceProdutos.length; index++) {
            let adicionandoProdutos = new Produto(sliceProdutos[index], sliceProdutosPreco[index])
            this.produtos.push(adicionandoProdutos)
        }
    }
}