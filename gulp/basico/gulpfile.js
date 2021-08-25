const gulp = require('gulp')
const { series, parallel } = require('gulp')

const inicio = cb => {
    console.log('Tarefa início')
    return cb()
}

const meio = cb => {
    console.log('Tarefa meio')
    return cb()
}

function copiar(cb) {
    /* gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) */

    gulp.src('pastaA/**/*.txt')
        /* .pipe(imagemPelaMetade()) */
        /* .pipe(imagemPretoEBranco()) */
        /* .pipe(transformacaoA()) */
        /* .pipe(transformacaoB()) */
        /* .pipe(transformacaoC()) */
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim')
    return cb()
}

module.exports.default = series(
    parallel(inicio, meio),
    copiar,
    fim,
    )