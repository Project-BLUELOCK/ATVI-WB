import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Delete from "../delete";

export default class deleteServico extends Delete {
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>){
        super()
        this.servico = servico
        this.entrada = new Entrada()
    }
    public delete(): void {
        console.log(`Lista de todos os Serviços`);
        this.servico.forEach(s => {
            console.log(`Serviços: ${s.nome}`);
        })
        let entrada = this.entrada.receberTexto(`Nome do serviço que deseja remover : `) 
        let geralServi = this.servico.map(i => i.nome)
        let servisele = geralServi.indexOf(entrada)
        if (servisele == -1) {
            console.log(`Serviço selecionado: ${entrada}, não existe, tente novamente`);
        } else {
            let exe = true
            while (exe) {
                console.log();
                console.log(`Tem certeza que deseja remover o serviço?`);
                console.log(`1 - Sim`);
                console.log(`2 - Não`);
                let valor = this.entrada.receberNumero(`Digite a opção: `)
                switch (valor) {
                    case 1:
                        this.servico.map(i => {
                            if (entrada === i.nome) {
                                let index = this.servico.indexOf(i)
                                this.servico.splice(index, 1)
                            }
                        })
                        console.log(`Serviço selecionado removido com sucesso`);
                    case 2:
                        exe = false
                        break;
                }
            }
        }
    }

}