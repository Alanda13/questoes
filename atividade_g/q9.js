import {question} from "readline-sync"

function main(){
    console.log('---Dias da Semana---')
    const numero = Number(question('Numero: '))

    const resultado = calcular_dia_semana(numero)
    console.log(resultado)
}
function calcular_dia_semana(valor){
    if (valor === 1){
        return '1 - Domingo'
    }else if(valor === 2){
        return '2- Segunda'
    }else if(valor === 3){
        return '3- Terça'
    }else if(valor === 4){
        return '4- Quarta'
    }else if(valor === 5){
        return '5 - Quinta'
    }else if(valor === 6){
        return '6 - Sexta'
    }else if( valor === 7){
        return '7 - Sábado'
    }else{
        return 'Valor inválido'
    }
}
main()