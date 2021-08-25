// let e const 
{
    var a = 2
    let b = 3 // let tem escopo de bloco
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!!`)

// Destructuring 
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, ,y] = [1, 5, 10]
console.log(x, y)

const {idade, nome} = {nome: 'Kauan', idade: 2}
console.log(idade, nome)