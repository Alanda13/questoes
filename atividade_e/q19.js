import {question} from "readline-sync"

function get_number(texto){
    const numero = Number(question(texto))
    return numero 
}
function main(){
    console.log('---Calculando o IMC---')
    var altura = get_number('Digite sua altura em metros: ')
    var peso = get_number('Digite seu peso em kg: ')

    var imc = peso / (altura ** 2)

    var resultado = eh_peso_normal(altura, peso, imc)
    console.log(resultado)
}
function eh_peso_normal(altura, peso, imc){
    if (imc < 25){
        return 'Peso normal!'
    }else if (imc >= 25 && imc <= 30){
        return 'Obeso!'
    }else{
        return 'Obesidade mórbida!'
    }
}
main()