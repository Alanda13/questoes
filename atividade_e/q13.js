import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Identificando o maior e o menor número---')
    var num1 = parseInt( get_number('Digite um numero inteiro: '))
    var num2 = parseInt( get_number('Digite um numero inteiro: '))
    var num3 = parseInt( get_number('Digite um numero inteiro: '))
    var num4 = parseInt( get_number('Digite um numero inteiro: '))
    var num5 = parseInt( get_number('Digite um numero inteiro: '))

    let maior = num1
    let menor = num1

    if(num2 > maior){
        maior = num2
    }else if (num2 < menor){
        menor = num2
    }
    if (num3 > num1){
        maior = num3
    }else if (num3 < menor){
        menor = num3
    }
    if (num4 > num1){
        maior = num4
    }else if (num4 < menor){
        menor = num4
    }
    if (num5 > num1){
        maior = num5
    }else if (num5 < menor){
        menor = num5
    }
    console.log('Menor valor: ', menor)
    console.log('Maior valor: ', maior)
}

main()
