// Arrow Function
const soma = (a, b) => a + b
console.log(soma(5, 5))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro Default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(undefined)
log(null)
log("KAUAN KAUAN KAUAN")

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(5, 5, 5, 5, 5, 5, 1))
