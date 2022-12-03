import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
//Cliente
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import atualizarCliente from "../negocio/Cliente/updateCliente";
import deleteCliente from "../negocio/Cliente/deleteCliente";
import GeracaoDeCliente from "../negocio/Cliente/gerar"
import ListagemClientes from "../negocio/Cliente/listagemClientes";
//Produto
import CadastroProduto from "../negocio/Produto/cadastroProdutos";
import updateProduto from "../negocio/Produto/updateProduto";
import deleteProduto from "../negocio/Produto/deleteProduto";
import ListagemProduto from "../negocio/Produto/listagemProduto";
//Servços
import CadastroServico from "../negocio/Servico/cadastroServico";
import updateServico from "../negocio/Servico/updateServico";
import ListagemServico from "../negocio/Servico/listagemServico";
import deleteServico from "../negocio/Servico/deleteServico";
//Listagem
import ListagemGenero from "../negocio/Listagem/listagemGenero";
import ListagemMenosQuantidade from "../negocio/Listagem/listagemClienteMenosConsumidor"
import listagemClienteValor from "../negocio/Listagem/ListagemClienteValor"
import ListagemQuantidade from "../negocio/Listagem/ListagemClienteConsumidor";
import psGenero from "../negocio/Listagem/LMGenero"
import psConsumidos from "../negocio/Listagem/listagemPSConsumidos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
let cadastroProduto = new CadastroProduto(empresa.getProdutos);
let cadastroServico = new CadastroServico(empresa.getServicos);
let gerarClientes = new GeracaoDeCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
cadastroServico.geracao();
cadastroProduto.geracao();
gerarClientes.geracao();
while (execucao) {
    console.log(`Opções:`);
    console.log(`-----CRUD CLIENTE-----`);
    console.log(`1 - Cadastrar cliente `);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar Cliente `);
    console.log(`4 - Deletar Cliente   `);
    
    console.log(`-----CRUD SERVICO-----`);
    console.log(`5 - Cadastrar Serviços`);
    console.log(`6 - Listar Serviços   `);
    console.log(`7 - Atualizar Serviço`);
    console.log(`8 - Deletar Serviço  `);

    console.log(`-----CRUD PRODUTO-----`);
    console.log(`9 - Cadastrar Produtos`);
    console.log(`10 - Listar Produtos   `);
    console.log(`11 - Atualizar Produtos`);
    console.log(`12 - Deletar Produtos  `);

    console.log(`-----LISTAGEM-----`);
    console.log(`13 - Clientes que mais consumiram em quantidade`);
    console.log(`14 - Listar Produtos e Serviços mais consumidos`);
    console.log(`15 - Listar clientes por Gêneros`);
    console.log(`16 - Listar Produtos e Serviços menos consumidos`);
    console.log(`17 - Listar Produtos e Serviços mais consumidos por genero`);
    console.log(`18 - Listar dos clietes que mais consumiram por valor`);

    console.log(`0 - Sair`);
    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {

        //CRUD CLIENTE
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastro.cadastrar();
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes);
            listagem.listagem();
            break;
        case 3:
            let atualizarClientes = new atualizarCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            atualizarClientes.atualizar()
            break
        case 4:
            let deleteClientes = new deleteCliente(empresa.getClientes)
            deleteClientes.delete()
            break

        //CRUD SERVICO
        case 5:
            let cadastro_servico = new CadastroServico(empresa.getServicos);
            cadastro_servico.cadastrar();
            break
        case 6:
            let listage_servico = new ListagemServico(empresa.getServicos);
            listage_servico.listagem();
            break
        case 7:
            let update_servico = new updateServico(empresa.getServicos)
            update_servico.atualizar() 
            break
        case 8:
            let delete_servico = new deleteServico(empresa.getServicos)
            delete_servico.delete() 

        //CRUD PRODUTO
        case 9:
            let cadastro_produto = new CadastroProduto(empresa.getProdutos)
            cadastro_produto.cadastrar();
            break;
        case 10:
            let listagem_produto = new ListagemProduto(empresa.getProdutos);
            listagem_produto.listagem();
            break;
        case 11:
            let update_Produto = new updateProduto(empresa.getProdutos)
            update_Produto.atualizar()

            break
        case 12:            
            let delete_produto = new deleteProduto(empresa.getProdutos)
            delete_produto.delete()
            break

        //LISTAGEM


        case 13:
            let mais_consumido = new ListagemQuantidade(empresa.getClientes)
            mais_consumido.listagem()
            break
        case 14:
            let psMaisConsumidos = new psConsumidos(empresa.getClientes)
            psMaisConsumidos.listagem()
            break

        case 15:
            let listage_genero = new ListagemGenero(empresa.getClientes);
            listage_genero.listagem();
            break

        case 16:
            let menos_consumido = new ListagemMenosQuantidade(empresa.getClientes)
            menos_consumido.listagem()
            break
        
        case 17:
            let consumidoPorGenero = new psGenero(empresa.getClientes)
            consumidoPorGenero.listagem()
            break
        case 18:
            let valorConsumido = new listagemClienteValor(empresa.getClientes)
            valorConsumido.listagem()
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Por favor repita o processo e escolha uma opção válida`)
    }
}