{
    {
        {
            {
                var sera = "será???"
                console.log(sera)
            }
        }
    }
}
console.log(sera) // var não importa se está dentro ou fora de um determinado bloco (exceto dentro de função)

function teste() {
    var local = 123
    console.log(local)
}

teste()
//console.log(local) [FORA DO ESCOPO DA FUNÇÃO DA ERRO]