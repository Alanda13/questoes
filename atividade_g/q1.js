import {question} from "readline-sync"

function main(){
    console.log('---Verificando se número é positivo ou negativo---')
    const num = Number(question('Digite um numero: '))

    const resultado = positivo_ou_negativo(num)
    console.log(resultado) 
}
function positivo_ou_negativo( num){
    if(num > 0 ){
        return 'O número é positivo!'
    }else if(num < 0){
        return 'O número é negativo!'
    }else{
        return 'O número é zero!'
    }
}
main()