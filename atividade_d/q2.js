import {question} from "readline-sync"

function main(){
    console.log('--- Verificando o maior e o menor número ---')

    const numero1 = Number(question('Digite um numero: '))
    const numero2 = Number(question('Digite um numero: '))

    if (numero1 > numero2){
        console.log('O maior número é o: ', numero1)
    }else if(numero1 === numero2){
        console.log('Os dois numeros são iguais')    
    }else{
        console.log('O menor numero é o: ', numero2)
    }
       
    }
    

main()