import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Gerar from "../gerar"

export default class GeracaoDeCliente extends Gerar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    public geracao(): void {

        // Gerando clientes 1
        let nome = "Julio Cesar Rodrigues Lucena Costa"
        let nomeSocial = "Julio Cesar Rodrigues Lucena Costa"
        let genero = "Masculino"

        // Gerando CPF
        let valor = "123.456.789-10";
        let date = new Date()
        date.getDate()
        let cpf = new CPF(valor, date);
        
        // Gerando RG
        let cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-9"
        let rg = new RG(valor, date)

        // Gerando Telefone
        let ddd = "11"
        let numero = "40028922"
        let telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        let produtos = [
            "Shampoo", // 1
            "Kit de Hidratação Authentic Beauty", // 2
            "Esmalte", // 3
            "Condicionador", // 4
            "Máscara Hidratante" // 5
        ]
        let sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando serviços ao cliente
        let servico = [
            "Visagismo", // 6
            "Design de Sobrancelhas", // 7
            "Curso de Automaquiagem" // 8
        ]
        let sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)



        // Gerando clientes 2
        nome = "Ryan Alves de Quadros"
        nomeSocial = "KiseXL"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-11";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-11"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "33435365"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Shampoo", // 1
            "Kit de Hidratação Authentic Beauty", // 2
            "Esmalte", // 3
            "Condicionador", // 4
            "Máscara Hidratante" // 5
        
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Visagismo", // 6
            "Design de Sobrancelhas", // 7
            "Curso de Automaquiagem" // 8

        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 3
        nome = "Ritsu Doan"
        nomeSocial = "Lenda do Japão"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        
        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-12"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "35135365"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Shampoo", // 1
            "Kit de Hidratação Authentic Beauty", // 2
            "Esmalte", // 3
            "Condicionador", // 4
            "Máscara Hidratante" // 5
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Visagismo", // 6
            "Design de Sobrancelhas", // 7
            "Curso de Automaquiagem" // 8
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 4
        nome = "Marta Vieira da Silva"
        nomeSocial = "Rainha Marta"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-13";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        
        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-13"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "33435365"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Shampoo", // 1
            "Kit de Hidratação Authentic Beauty", // 2
            "Esmalte", // 3
            "Condicionador", // 4
            "Máscara Hidratante" // 5
        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Visagismo", // 6
            "Design de Sobrancelhas", // 7
            "Curso de Automaquiagem" // 8
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 5
        nome = "Ronaldo Nazário"
        nomeSocial = "Ronaldinho"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-14";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-14"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "77589644"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Shampoo", // 1
            "Kit de Hidratação Authentic Beauty", // 2
            "Esmalte", // 3
            "Condicionador", // 4
            "Máscara Hidratante" // 5
        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Visagismo", // 6
            "Design de Sobrancelhas", // 7
            "Curso de Automaquiagem" // 8
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 6
        nome = "Alisha Lehmann"
        nomeSocial = "Alisha"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-15";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-15"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "77589644"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Base", // 7
            "Pó Compacto", // 8
            "Blush", // 9
            "Pincel", // 10
            "Pente", // 11
            "Escova" // 12
        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure", // 1
            "Pedicure", // 2
            "Hidratação", // 3
            "Botox",    // 4
            "Corte" // 5
        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 7
        nome = "Larissa Manoela"
        nomeSocial = "Lari"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-16";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        
        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-16"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "23549644"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Shampoo", // 1
            "Creme para as Mãos", // 16
            "Sabonete", // 17
            "Desodorante", // 18
            "Creme para os Pés", // 19
            "Creme para o Rosto", // 20
            "Creme para o Corpo", // 21
            "Tesoura de Cabeleleiro", // 22
            "Luva pra Tratamento Capilar", // 23
            "Cacheador", // 24
            "Prancha" // 25
        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Depilação", // 11
            "Massagem", // 12
            "Cirurgia Plástica", // 13
            "Lipoaspiração", // 14
            "Dia da Noiva" // 15
        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 8
        nome = "João Guilherme"
        nomeSocial = "João"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-17";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-17"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "23541207"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Pó Compacto", // 8
            "Blush", // 9
            "Pincel", // 10
            "Pente", // 11
            "Escova" // 12
        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Depilação", // 11
            "Massagem", // 12
            "Cirurgia Plástica" // 13

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 9
        nome = "Isagi Yoichi"
        nomeSocial = "Isagi"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-18";
        date = new Date()
        date.getDate()  
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-18"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "23578508"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Pó Compacto", // 8
            "Blush", // 9
            "Pincel", // 10
            "Pente" // 11

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Depilação", // 11
            "Massagem" // 12

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 10
        nome = "Meguru Bachira"
        nomeSocial = "Bachira"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-19";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-19"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "23541747"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Pó Compacto", // 8
            "Blush", // 9
            "Pincel" // 10

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Depilação" // 11

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 11
        nome = "Kazuma Kiryu"
        nomeSocial = "Kiryu"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-20";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-20"
        rg = new RG(valor, date)
        
        // Gerando Telefone
        ddd = "11"
        numero = "48578508"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Pó Compacto" // 8

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Depilação" // 11

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 12
        nome = "Andressa Ginevro"
        nomeSocial = "Andressa"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-21";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-21"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "13"
        numero = "48578858"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
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
            "Creme para o Corpo" // 21

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
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
            "Depilação" // 11

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 13
        nome = "Amanda Silva"
        nomeSocial = "Amanda"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-22";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-22"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "13"
        numero = "48578845"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Kit de Hidratação Authentic Beauty", // 2
            "Esmalte", // 3
            "Condicionador", // 4
            "Máscara Hidratante" // 5

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure", // 1
            "Pedicure", // 2
            "Hidratação" // 3

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 14
        nome = "Marilia Mendonça"
        nomeSocial = "Marilia"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-23";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-23"
        rg = new RG(valor, date)
        
        // Gerando Telefone
        ddd = "14"
        numero = "44478845"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
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
            "Prancha" // 25

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
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
            "Dia da Noiva" // 15

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 15
        nome = "Roy Mustang"
        nomeSocial = "Alquimista das Chamas"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-24";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-24"
        rg = new RG(valor, date)
        
        // Gerando Telefone
        ddd = "11"
        numero = "44778846"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Lixa de Unha", // 14
            "Kit de Hidratação Authentic Beauty", // 2
            "Luva pra Tratamento Capilar" // 23

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure", // 1
            "Pedicure" // 2

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 16
        nome = "Riza Hawkeye"
        nomeSocial = "The Hawk's Eye"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-25";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-25"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778855"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Kit de Hidratação Authentic Beauty", // 2
            "Luva pra Tratamento Capilar", // 23
            "Creme para Pentear", // 24
            "Blush", // 9
            "Pincel", // 10
            "Pente", // 11
            "Escova", // 12
            "Creme para Pentear", // 13
            "Lixa de Unha", // 14
            "Removedor de Esmalte", // 15
            "Creme para as Mãos", // 16
            "Sabonete" // 17

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure", // 1
            "Pedicure", // 2
            "Dia da Noiva", // 15
            "Penteado", // 9
            "Maquiagem", // 10
            "Depilação", // 11
            "Massagem" // 12

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 17
        nome = "Debinha"
        nomeSocial = "Deb"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-26";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-26"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778856"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Kit de Hidratação Authentic Beauty", // 2
            "Luva pra Tratamento Capilar", // 23
            "Creme para Pentear", // 24

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure", // 1
            "Pedicure"

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 18
        nome = "Gabriela Nunes"
        nomeSocial = "Gabi Nunes"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-27";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-27"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778857"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Kit de Hidratação Authentic Beauty", // 2
            "Luva pra Tratamento Capilar" // 23

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure", // 1
            "Pedicure" // 2

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 19
        nome = "Pablo Martín Páez Gavira"
        nomeSocial = "Gavi"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-28";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-28"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778858"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Kit de Hidratação Authentic Beauty" // 2

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Hidratação"

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)


        // Gerando clientes 20
        nome = "Leonor, Princesa de Astúrias"
        nomeSocial = "Leonor"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-29";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-29"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778859"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
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
            "Tesoura de Cabeleleiro" // 22
        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
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
            "Dia da Noiva"

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 21
        nome = "Fernanda Palermo"
        nomeSocial = "Fernanda"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-30";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-30"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778860"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Máscara Hidratante", // 5
            "Batom", // 6
            "Base", // 7
            "Pó Compacto", // 8
            "Blush" // 9

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure", // 1
            "Pedicure", // 2
            "Hidratação", // 3
            "Botox"  // 4

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 22
        nome = "Jane Austen"
        nomeSocial = "Jane"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-31";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-31"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778861"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Máscara Hidratante", // 5
            "Batom", // 6
            "Base" // 7

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure", // 1
            "Pedicure", // 2
            "Hidratação" // 3
            
        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 23
        nome = "Jorge Amado"
        nomeSocial = "Jorge"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-32";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-32"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778862"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Máscara Hidratante", // 5
            "Batom" // 6

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure", // 1
            "Pedicure" // 2

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 24
        nome = "Clarice Lispector"
        nomeSocial = "Clarice"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-33";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-33"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778863"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Escova"


        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Manicure"
            

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 25
        nome = "Virginia Woolf"
        nomeSocial = "Virginia"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-34";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-34"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778864"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Sabonete"

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Pedicure"

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 26
        nome = "Hilda Hilst"
        nomeSocial = "Hilda"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-35";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-35"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778865"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Condicionador"

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Corte"

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 27
        nome = "Jojo Moyes"
        nomeSocial = "Jojo"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-36";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-36"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778866"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Shampoo"

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Pedicure"

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 28
        nome = "Jorge Amado"
        nomeSocial = "Jorge"
        genero = "Masculino"

        // Gerando CPF
        valor = "123.456.789-37";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-37"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778867"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Pó Compacto", // 8
            "Blush", // 9
            "Pincel", // 10
            "Pente", // 11
            "Escova", // 12
            "Creme para Pentear", // 13
            "Lixa de Unha"

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Corte",
            "Pedicure"

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 29
        nome = "J.K. Rowling"
        nomeSocial = "J.K."
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-38";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-38"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778868"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Pó Compacto", // 8
            "Blush", // 9
            "Pincel", // 10
            "Pente", // 11
            "Escova" // 12

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Corte",

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 30
        nome = "Wednesday Addams"
        nomeSocial = "Wednesday"
        genero = "Feminino"

        // Gerando CPF
        valor = "123.456.789-39";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-39"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778869"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Shampoo", 
            "Condicionador"

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Corte",
            "Pedicure",
            "Botox",    // 4
            "Visagismo", // 6
            "Design de Sobrancelhas", // 7
            "Curso de Automaquiagem", // 8
            "Penteado", // 9
            "Maquiagem"

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        // Gerando clientes 31
        nome = "Morticia Addams"
        nomeSocial = "Morticia"
        genero = "Feminino"
        
        // Gerando CPF
        valor = "123.456.789-40";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);

        // Gerando RG
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.345.678-40"
        rg = new RG(valor, date)

        // Gerando Telefone
        ddd = "11"
        numero = "44778870"
        telefone = new Telefone(ddd, numero)

        // Adicionando produtos ao cliente
        produtos = [
            "Shampoo",
            "Condicionador",
            "Pó Compacto", // 8
            "Blush", // 9
            "Pincel" // 10

        ]

        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        // Adicionando Serviços ao cliente
        servico = [
            "Corte",

        ]

        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        }

        // Adicionando RG e Telefone ao cliente
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        
    }
}
