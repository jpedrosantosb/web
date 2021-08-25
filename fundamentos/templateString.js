/*const nome1= "João "
const nome2= "Kauan "
const nome3= "Gabi"

console.log(nome1 + nome2 + nome3)*/
const nome = ' Rebeca'
const concatenacao = 'Olá' + nome + '!' // Ñ considera quebra de linha 

const template = `
Olá
${nome}!`
console.log(concatenacao, template); // considera quebra de linha 

console.log(`1+1 = ${1+1}`) //console.log('1+1= ' + (1+1))

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!!`)

