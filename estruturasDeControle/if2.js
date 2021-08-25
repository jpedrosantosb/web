function teste1(num) {
    if(num > 7) {
    console.log(num) // só a primeira linha conta sem as chaves no if
    console.log('final')
    }
}

teste1(6)
teste1(8)

//ERRADO!!
function teste2(num) {
    if(num > 7); {   // cuidao com o ; [NÃO USAR COM ESTRUTURAS DE CONTROLE]
    console.log(num)
    }
}

teste2(6)
teste2(8)

