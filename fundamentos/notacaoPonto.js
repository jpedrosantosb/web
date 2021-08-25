console.log(Math.ceil(6.1)) // arredonda pra cima

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bolatwo'
console.log(obj1)

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Execcc...')
    }

}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
