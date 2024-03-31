//Escreva um algoritmo para determinar o número de dígitos de um número informado.

import { get_number, print } from '../utils/io_utils.js'


function main(){
    const numero = get_number('Digite um numero: ')
    let contador = 0
    const limite = 10

    const resultado = calcular_digitos(numero, contador, limite)
    print('A quantidade de dígitos que esse número possui é igual a: ' +resultado);
}
function calcular_digitos(numero, contador, limite){
    while(numero >= 1 && contador < limite){
        numero = (numero / 10) 
        contador++
    }
    return contador
}
main()
