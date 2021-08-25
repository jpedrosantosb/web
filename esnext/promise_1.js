
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Kauan', 'Gabi', 'Pedro', 'João', 'Esther'])

})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)

// function primeiroElemento(array) {
    // return array[0]
// }
// 
// function primeiraLetra(string) {
    // return string[0]
// }
// 
// const letraMinuscula = letra => letra.toLowerCase()
// 
// new Promise(function(cumprirPromessa) {
    // cumprirPromessa(['Kauan', 'Gabi', 'Pedro', 'João', 'Esther'])
// })
    // .then(primeiroElemento)
    // .then(primeiraLetra)
    // .then(letraMinuscula)
    // .then(console.log)
// 