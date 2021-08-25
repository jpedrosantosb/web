// operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função 

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 2358.00 }
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array 
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Marta', ...grupoA, 'Rafael']
console.log(grupoFinal)