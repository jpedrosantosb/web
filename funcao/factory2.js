function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.90))
console.log(criarProduto('Iphone', 3000.00))
