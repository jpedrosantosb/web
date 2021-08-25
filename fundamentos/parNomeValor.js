//  par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Kauan',
    idade: 2,
    endereco: {logradouro: 'são josé',
    numero: "Q 03 C 38"
    }
} 

console.log(saudacao)
console.log(exec())
console.log(cliente)