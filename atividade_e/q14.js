import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Calculando a média e números maiores que a média!---')
    var num1 = parseInt( get_number('Digite um numero inteiro: '))
    var num2 = parseInt( get_number('Digite um numero inteiro: '))
    var num3 = parseInt( get_number('Digite um numero inteiro: '))
    var num4 = parseInt( get_number('Digite um numero inteiro: '))
    var num5 = parseInt( get_number('Digite um numero inteiro: '))

    var media = (num1 + num2 + num3 + num4 + num5) / 5
    console.log('A média dos números é: ',media)

   if (num1 > media){
    console.log('Maior que a média: ', num1)
   }
   if (num2 > media){
    console.log('Maior que a média ', num2)
   }
   if (num3 > media){
    console.log('Maior que a média: ', num3)
   }
   if (num4 > media){
    console.log('Maior que a média: ', num4)
   }
   if (num5 > media){
    console.log('Maior que a média: ', num5)
   }
}
main()