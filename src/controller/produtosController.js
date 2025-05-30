const { prisma } = require("../services");

async function buscarProdutos() {
    try {
        return await prisma.produtos.findMany();
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
    // return await executarSQL("SELECT * FROM produtos;");
}

async function buscarUmProduto(id) {
    try {
        return await prisma.produtos.findFirst({
            where: {
                produto_id: Number(id)
            }
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
    // return await executarSQL(`SELECT * FROM produtos WHERE produto_id = ${id};`);
}

async function criarProduto(dados) {
    try {
        return await prisma.produtos.create({
            data: dados
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
    // return await executarSQL(`INSERT INTO produtos (produto_nome, produto_preco, produto_desconto, produto_imagem, marca_id,categoria_id) VALUES ('${dados.produto_nome}', ${dados.produto_preco}, ${dados.produto_desconto},'${dados.produto_imagem}', ${dados.marca_id}, ${dados.categoria_id})`)
}

async function editarProduto(id,dados) {
    try {
        return await prisma.produtos.update({
            where: {produto_id: Number(id)},
            data: dados
        })
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
        
    }
}

async function apagarProduto(id) {
    // return await executarSQL(`DELETE FROM produtos WHERE produto_id = ${id}`)
    try {
        return await prisma.produtos.delete({
            where: {
                produto_id: Number(id)
            }
        });
    } catch (error) {
        return {
            tipo: "error",
            mensagem: error.message
        }
    }
}

module.exports = {
    buscarProdutos,
    buscarUmProduto,
    criarProduto,
    apagarProduto,
    editarProduto
}