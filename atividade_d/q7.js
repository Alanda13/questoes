import {question} from "readline-sync"
function main(){
    const num1 = Number(question('Lado 1 do triangulo: '))
    const num2 = Number(question('Lado 2 do triangulo: '))
    const num3 = Number(question('Lado 3 do triangulo: '))

    if (lados_diferente_zero(num1,num2,num3)){
        console.log('Não existe lado igual a zero!')
    }

    const resultado = tipo_triangulo(num1, num2, num3)
    console.log(resultado)   
}
function lados_diferente_zero(num1, num2, num3){
    return (num1 === 0 || num2 === 0 || num3 === 0)
}

function tipo_triangulo(num1, num2, num3){
    if (num2 + num3 > num1 && num2 + num1 > num3 && num1 + num3 > num2 ){
        if (num1 === num2 === num3){
            return 'É um triângulo EQUILÁTERO!'
        }else if(num1 === num2 || num1 === num3 || num2 === num3){
            return'É um triângulo ISÓSCELES!'
        }else{
            return 'É um triângulo ESCALENO!'
        }
    }else{
        return 'Não é um triangulo!'
    }
}

main()