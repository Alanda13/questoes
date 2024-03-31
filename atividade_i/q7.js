//Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.

import { get_number, print } from '../utils/io_utils.js'

function main(){
    let numero_inicial = get_number("Digite o numero inicial:");
    achar_numero_igual(numero_inicial);

}     
function achar_numero_igual(numero_inicial){
    let numero_atual = 0
    while (numero_atual !== numero_inicial){ //enquanto o número atual for diferente do numero inicial peça ao usuário para digitar outro valor
        numero_atual = get_number('Digite outro valor: ')
    }
    print('Esse número é igual ao número inicial!')
    }
    

main()