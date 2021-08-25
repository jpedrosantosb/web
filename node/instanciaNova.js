// Uma factory retorna um novo ojeto
module.exports = () => {
    return {
        valor: 1, 
        inc() {
            this.valor++
        }
    }
}