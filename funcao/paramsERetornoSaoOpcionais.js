function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 3))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 8, 6, 4, 7))
console.log(area(5, 5))