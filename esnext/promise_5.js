
function funcionarOuNao(valor, chanceDeErro) {
    return new Promise ((resolve, reject) => {
        try {
            con.log('jajaja')
            if(Math.random() < chanceDeErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Teste...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        erro => console.log(`Erro Esp.: ${erro}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(erro => console.log(`Erro: ${erro}`))
    .then(() => console.log('Fim!'))