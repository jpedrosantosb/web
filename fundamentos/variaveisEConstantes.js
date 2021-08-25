var a = 3  
let b = 10

console.log(a,b)

var a = 30
b = 40 /* já declarado o let uma vez dá erro tentar
declarar o let novamente para subtituir o valor. 
Com o var isso não ocoorre.
*/
console.log(a,b)

const c = 3.14 // constante não se pode mudar o valor dps de declarada 

console.log(c)