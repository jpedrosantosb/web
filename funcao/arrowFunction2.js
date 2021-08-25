function Pessoa() {
    this.idade = 0 

    setInterval(() => {
        this.idade++ 
        console.log(this.idade)

    }, 1000)
}

new Pessoa


// MESMO EXEMPLO DO BIND, PORÉM USANDO ARROW FUNCTION