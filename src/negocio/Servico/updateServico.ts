import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Atualizar from "../atualizar";

export default class atualizarServico extends Atualizar {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada();
    }
    public atualizar(): void {
        console.log(`\nListagem de todos os Servicos: `)
        this.servicos.forEach((servico) => {
            console.log(`Serviço: ` + servico.nome);
        })
        let geralServi = this.servicos.map(i => i.nome);
        let entrada = this.entrada.receberTexto(`Escolha qual serviço deseja atualizar escrevendo o nome dele: `)
        let servisele = geralServi.indexOf(entrada)
        if (servisele == -1) {
            console.log(`Serviço selecionado: ${entrada}, não existe, tente novamente`);
        } else {
            let novoNome = this.entrada.receberTexto(`Digite um novo nome para o Serviço que deseja atualizar: `)
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do Serviço que deseja atualizar: R$`)
            this.servicos.filter(servico => servico.nome == entrada).map(i => i.preco = novoPreco).toString()
            this.servicos.filter(servico => servico.nome == entrada).map(i => i.nome = novoNome).toString()
            console.log(`Serviço atualizado com sucesso`);
        }
    }
}