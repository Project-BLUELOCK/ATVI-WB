import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Atualizar from "../atualizar";

export default class atualizarCliente extends Atualizar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.servicos = servicos;
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public atualizar(): void {
        console.log(`\nListagem de todos os clientes cadastrados: \n`);
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ${(cliente.nome)}`);
        })
        let listaclientes = this.clientes.map(i => i.nome)
        let entrada = this.entrada.receberTexto(`Defina qual cliente você deseja atualizar escrevendo o nome atual dele: `);
        console.log();
        let pegarlista = listaclientes.indexOf(entrada)
        let loop = true
        if (pegarlista == -1) {
            console.log(`Perdão o cliente desejado cujo o nome foi escrito não existe`);
        } else {
            this.clientes.map(i => {
                while (loop) {
                    console.log("1 - Atualizar o Nome");
                    console.log("2 - Atualizar o Nome Social");
                    console.log("3 - Atualizar o Gênero");
                    console.log("4 - Atualizar o CPF");
                    console.log("5 - Atualizar o RG");
                    console.log("6 - Atualizar o Telefone");
                    console.log("0 - Sair");
                    console.log();
                    let entradaOption = this.entrada.receberNumero("Digite a opção que deseja editar: ")

                    switch (entradaOption) {
                        case 1:
                            let novoNome = this.entrada.receberTexto("Digite o novo nome para o cliente selecionado: ")
                            this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.nome = novoNome)
                            loop = false
                            console.log("Tudo certo, foi atualizado o nome do cliente selecionado");
                            console.log();
                            break

                        case 2:
                            let novoNomeSocial = this.entrada.receberTexto("Digite o novo nome social para o cliente selecionado: ")
                            this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.nomeSocial = novoNomeSocial)
                            console.log("Tudo certo, foi atualizado o nome social do cliente selecionado");
                            console.log();
                            break

                        case 3:
                            let novoGenero = this.entrada.receberTexto("Digite o novo gênero para o cliente selecionado (Masculino ou Feminino): ")
                            this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.genero = novoGenero)
                            console.log("Tudo certo, foi atualizado o gênero do cliente selecionado");
                            console.log();
                            break

                        case 4:
                            let rotacaodecpf = true
                            while (rotacaodecpf) {
                                console.log("1 - CPF");
                                console.log("2 - Data de emissão");
                                console.log("0 - Sair");
                                let receberCPF = this.entrada.receberNumero("Digite a opção que deseja editar: ")
                                switch (receberCPF) {

                                    case 1:
                                        let novoCPF = this.entrada.receberTexto("Digite o novo CPF")
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getCpf.setValor = novoCPF)
                                        console.log("Tudo certo, foi atualizado o CPF do cliente selecionado");                                  
                                        break

                                    case 2:
                                        let novaData = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                                        let partesData = novaData.split('/')
                                        let ano = new Number(partesData[2].valueOf()).valueOf()
                                        let mes = new Number(partesData[1].valueOf()).valueOf()
                                        let dia = new Number(partesData[0].valueOf()).valueOf()
                                        let dataEmissao = new Date(ano, mes, dia)
                                        this.clientes.filter(cliente => cliente.nome == entrada).map(i => i.getCpf.setDataEmissao = dataEmissao)
                                        console.log("Tudo certo, foi atualizada a data de emissão do CPF do cliente selecionado");
                                        break

                                    case 0:
                                        rotacaodecpf = false
                                        break
                                    default:
                                        console.log("Perdão mas o valor inserido não foi encontrado, por favor digite novamente");
                                }
                            }
                            break

                        case 5:
                            let rotacaodergs = true
                            console.log("RG's cadastrados: ");
                            i.getRgs.map((i, posi) => {
                                console.log(`Posição de número ${posi} - ${i.getValor} - ${i.getDataEmissao.toLocaleDateString()}`);
                                console.log();
                                while (rotacaodergs) {
                                    console.log("1 - RG's");
                                    console.log("2 - Data de emissão");
                                    console.log("0 - Sair");
                                    let receberRG = this.entrada.receberNumero("Digite a opção que deseja editar: ")
                                    switch (receberRG) {
                                        case 1:
                                            let rgroda = true
                                            while (rgroda) {
                                                console.log("Para sair digite -1");
                                                let receberRG = this.entrada.receberNumero("Digite a posição do RG para edição: ")
                                                switch (receberRG) {
                                                    case posi:
                                                        let novoRG = this.entrada.receberTexto("Digite o novo número de RG: ")
                                                        this.clientes.filter(cliente => cliente.nome == entrada).map(r => r.getRgs[receberRG].setValor = novoRG)
                                                        console.log("Tudo certo, foi atualizado o RG do cliente selecionado");
                                                        break                                                        
                                                    case -1:
                                                        rgroda = false                                                        
                                                        break
                                                    default:
                                                        console.log("Perdão mas o valor inserido não foi encontrado, por favor digite novamente");
                                                }
                                            }
                                            break

                                        case 2:
                                            let rotacaodergsdatas = true
                                            while (rotacaodergsdatas) {
                                                console.log("Para sair digite -1");
                                                let receberRG = this.entrada.receberNumero("Digite a posição do RG para a edição: ")
                                                switch (receberRG) {

                                                    case posi:
                                                        let novaData = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                                                        let partesData = novaData.split('/')
                                                        let ano = new Number(partesData[2].valueOf()).valueOf()
                                                        let mes = new Number(partesData[1].valueOf()).valueOf()
                                                        let dia = new Number(partesData[0].valueOf()).valueOf()
                                                        let dataEmissao = new Date(ano, mes, dia)
                                                        this.clientes.filter(cliente => cliente.nome == entrada).map(r => r.getRgs[receberRG].setDataEmissao = dataEmissao)
                                                        console.log("Tudo certo, foi atualizada a data de emissão do RG do cliente selecionado");
                                                        break

                                                    case -1:
                                                        rotacaodergsdatas = false                                                    
                                                        break

                                                    default:
                                                        console.log("Perdão mas o valor inserido não foi encontrado, por favor digite novamente");
                                                }
                                            }
                                            break

                                        case 0:
                                            rotacaodergs = false
                                            break

                                        default:
                                            console.log("Perdão mas o valor inserido não foi encontrado, por favor digite novamente");

                                    }
                                }
                            })
                            break
                        case 6:
                            i.getTelefones.map((i, posi) => {
                                console.log(`Posição ${posi} - ${i.getDdd} ${i.getNumero}`);
                                let telefone = true
                                while (telefone) {
                                    console.log("Para sair digite -1");
                                    
                                    let posicao = this.entrada.receberNumero("Digite a posição do telefone para a edição: ")
                                    switch (posicao) {
                                        case posi:
                                            let tell = this.entrada.receberTexto(`Por favor digite o número do telefone no padrão (DDD)+(Número):`);
                                            let partesTell = tell.split(' ')
                                            let ddd = new String(partesTell[0].valueOf()).valueOf()
                                            let numero = new String(partesTell[1].valueOf()).valueOf()
                                            this.clientes.filter(cliente => cliente.nome == entrada).map(r => r.getTelefones[posicao].setDDD = ddd)
                                            this.clientes.filter(cliente => cliente.nome == entrada).map(r => r.getTelefones[posicao].setNumero = numero)
                                            console.log("Tudo certo, foi atualizado o telefone do cliente selecionado");
                                            break

                                        case -1:
                                            telefone = false
                                            break

                                        default:
                                            console.log("Perdão mas o valor inserido não foi encontrado, por favor digite novamente");                                           

                                    }
                                }
                            })
                            break

                        case 0:
                            loop = false                        
                            break

                        default:
                            console.log("Comando não encontrado");

                    }
                }
            })
        }
    }
}