import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        let servico = this.entrada.receberTexto("Digite o nome do novo serviço: ");
        let nomes = this.servicos.map(i => (i.nome))
        if (nomes.includes(servico)) {
            console.log(`O Serviço: ${servico}, já está cadastrado dentro do sistema`);
            console.log();
        } else {
            let valor = this.entrada.receberNumero(`Qual será o preço do servico? Em R$: `)
            let cadastro = new Servico(servico, Number(valor));
            this.servicos.push(cadastro);
            console.log();
        }
    }
    public geracao(): void {
        let servicos = [
            "Manicure", // 1
            "Pedicure", // 2
            "Hidratação", // 3
            "Botox",    // 4
            "Corte", // 5
            "Visagismo", // 6
            "Design de Sobrancelhas", // 7
            "Curso de Automaquiagem", // 8
            "Penteado", // 9
            "Maquiagem", // 10
            "Depilação", // 11
            "Massagem", // 12
            "Cirurgia Plástica", // 13
            "Lipoaspiração", // 14
            "Dia da Noiva", // 15

        ]
        let preco = [
            30.00, // 1
            30.00, // 2
            50.00, // 3
            100.00, // 4
            40.00, // 5
            190.00, // 6
            60.00, // 7    
            260.00, // 8
            40.00,  // 9
            50.00, // 10
            50.00, // 11
            50.00, // 12
            1800.00, // 13
            1200.00, // 14
            5200.00, // 15

        ]
        let sliceServico = servicos.slice();
        let sliceServicoPreco = preco.slice()
        for (let index = 0; index < sliceServico.length; index++) {
            let adicionarServico = new Servico(sliceServico[index], Number(sliceServicoPreco[index]))
            this.servicos.push(adicionarServico)
        }
    }
}