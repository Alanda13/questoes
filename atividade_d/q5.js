import {question} from "readline-sync"

function main (){
    //Entrada
    const numero1 = Number(question('Digite o numero 1: '))
    const numero2 = Number(question('Digite o numero 2: '))
    const numero3 = Number(question('Digite o numero 3: '))

    let maior, menor, meio

    if (numero1 > numero2 && numero1 > numero3){
        maior = numero1
        //Entre 2 e 3
        if (numero2 < numero3){
            menor = numero2
            meio = numero3
        }else{
            menor = numero3
            meio = numero2
        }
        //
    }else if(numero1 < numero2 &&  numero1 < numero3){
        menor = numero1
        if (numero2 > numero3){
            maior = numero2
            meio = numero3
        }else{
            maior = numero3
            meio = numero2
        }
    }else{
        meio = numero1
        if (numero2 > numero3){
            maior = numero2
            menor = numero3
        }else{
            maior = numero3
            menor = numero2
        }
    }
    console.log('Menor: ', menor)
    console.log('Meio: ', meio)
    console.log('Maior: ', maior)
}
main()