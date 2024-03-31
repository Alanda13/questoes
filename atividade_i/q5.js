//Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada
//divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até
//chegar a 2.

import { get_number, print } from '../utils/io_utils.js'

function main(){
    let x = get_number('Digite um numero: ')
    let n = get_number('Digite um numero: ')

    while( n >= 2){
        let resultado = x/n;
        print('O resultado da divisão é igual a: ' +resultado.toFixed(2))
        x = resultado;
        n--;
    }
        

}

main()

