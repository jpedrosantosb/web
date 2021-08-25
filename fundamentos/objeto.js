const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4985.00
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo', 
    preco: 79.90
    /*obj:{
        blabla: 1, 
        obj:{
            blabla: 2
        }
    } (É POSSÍVEL)*/
}
console.log(prod2)

/*JSON
'{"Nome": "Camisa Polo", "preco": 79.9}'*/