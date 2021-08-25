function tratarErroELancar(erro) {
    //throw new Error('ERRO!! SUPORTE TECNICO JÁ NOTIFICADO')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
    tratarErroELancar(e)
    } finally {
        console.log('FINAL')
    }
}
const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)