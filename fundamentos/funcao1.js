// função sem retorno 
function imprimirSoma(a, b) {
console.log(a + b)

}
imprimirSoma(2, 3)
imprimirSoma(2) //NaN
imprimirSoma(2, 3, 5, 4, 8)
imprimirSoma() // NaN

// função com retorno
function soma(a, b=0) {
return a + b
}
console.log(soma(2, 3)) //tem que ser chamada dentro do console.log
console.log(soma(2))
console.log(soma()) //NaN