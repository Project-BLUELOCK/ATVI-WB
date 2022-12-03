import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Delete from "../delete"

export default class deleteCliente extends Delete {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public delete(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
        })
        let todosClientes = this.clientes.map(i => i.nome)
        let entrada = this.entrada.receberTexto(`Escolha qual cliente deseja remover escrevendo o nome dele/a :  `)
        let pegarIndexOF = todosClientes.indexOf(entrada)
        if (pegarIndexOF == -1) {
            console.log(`Cliente selecionado: ${entrada}, não existe, tente novamente`);
        } else {
            let exe = true
            while (exe) {
                console.log();
                console.log(`Tem certeza que deseja remover o cliente?`);
                console.log(`1 - Sim`);
                console.log(`2 - Não`);
                let valor = this.entrada.receberNumero(`Digite a opção: `)
                switch (valor) {
                    case 1:
                        this.clientes.map(i => {
                            if (entrada === i.nome) {
                                let index = this.clientes.indexOf(i)
                                this.clientes.splice(index, 1)
                            }
                        })
                        console.log(`Cliente selecionado removido com sucesso`);
                    case 2:
                        exe = false
                        break;
                }
            }
        }
    }
}
