import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Verificando valores inteiros---')

    var num1 = parseInt( get_number('Digite um numero inteiro: '))
    var num2 = parseInt( get_number('Digite um numero inteiro: '))

    var resto = num1 % num2;
    if (resto === 1) {
        // Se o resto da divisão for 1
        var resultado = num1 + resto;
        console.log("A soma dos valores mais o resto da divisão é:", resultado);
    } else if (resto === 2) {
        // Se o resto da divisão for 2
        console.log("Os valores são", (num1 % 2 === 0 ? "pares" : "ímpares"), "e", (num2 % 2 === 0 ? "pares" : "ímpares"));
    } else if (resto === 3) {
        // Se o resto da divisão for 3
        var resultado = (num1 + num2) * valor1;
        console.log("A multiplicação da soma dos valores pelo primeiro é:", resultado);
    } else if (resto === 4 && num2 !== 0) {
        // Se o resto da divisão for 4 e o segundo valor for diferente de zero
        var resultado = (num1 + num2) / num2;
        console.log("A divisão da soma dos valores pelo segundo é:", resultado);
    } else {
        // Em qualquer outra situação
        console.log("O quadrado dos valores lidos são:", num1 * num1, "e", num2 * num2);
    }
}
  main()
