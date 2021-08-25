const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],valores[3])
console.log(valores[5])

valores[4]= 10
valores[5]= 40
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'texto')
console.log(valores)

console.log(valores.pop()) // deleta
console.log(valores)
// ou 
delete valores [0]
console.log(valores)

console.log(typeof valores) // array é um objeto 