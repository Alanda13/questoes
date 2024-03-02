import {question} from "readline-sync"

function main(){
    console.log('--Verificando números iguais--')
    
    const num_1 = Number(question('Digite um numero: '))
    const num_2 = Number(question('Digite um numero: '))
    const num_3 = Number(question('Digite um numero: '))

    //Verificando quantos números são iguais
    if (num_1 === num_2 && num_2 === num_3){  //se numero 1 e número 2 são iguais e numero 2 e numero 3 tbm são iguais então os 3 núneros são iguais
        console.log('Os três números são iguais')
    } else if(num_1 === num_2 || num_1 === num_3 || num_2 ===  num_3){ //se numero 1 e numero 2 ou numero 1 e numero 3 ou número 2 e número 3 são iguais então somente dois números são iguais
        console.log('Apenas dois números são iguais')
    }else{  //Se nenhum acima for verdadeiro então nenhum número é igual
        console.log('Nenhum dos números são iguais')
    }
     
}
main()