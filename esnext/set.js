// não aceita repetição/ não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Santos')
times.add('Milan')
times.add('Barça')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
console.log(times.has('Barça'))
times.delete('Barça')
console.log(times.has('Barça'))

const nomes = ['Raquel', 'Lucas Silva', 'Julia', 'Lucas Alves']
const nomesSet = new Set(nomes)
console.log(nomesSet)