const imprimirResultado = function(nota) {
    if(nota >=7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epaa!!') /* Por ser fracamente tipada não dar erro,
esta comparando string com valor numerico [TRATAR EXCESSÃO EM UM POSSÍIVEL PROGRAMA]
*/