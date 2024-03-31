//Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o
//resultado da última divisão efetuada.

import { get_positive_number, print } from '../utils/io_utils.js'

function main(){
  let numero = get_positive_number('Digite um numero:  ')

  while (numero >= 1){
    numero = numero/2
  }
  print('A última divisão efetuada é: ' +numero);


}
main()


