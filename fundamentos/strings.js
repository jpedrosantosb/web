const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(7)) // não retorna nada, não existe o indice 7
console.log(escola.charCodeAt(3))
console.log(escola.indexOf("3"))

console.log(escola.substring(0))
console.log(escola.substring(0,2))

console.log("Escola ".concat(escola).concat('!')) // concatenação
console.log('Escola ' + escola + '!') // outro meio de concatenação 


console.log(escola.replace(3, 'e'))
// ou
//console.log(escola.replace(/\d/, 'e')) regex

console.log('Gabi, Kauan, João'.split(',')) // split define o separador no array


