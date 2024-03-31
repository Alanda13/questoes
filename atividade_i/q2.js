import { get_number, print } from '../utils/io_utils.js'

//2. Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.

function main(){
  const num_a = get_number('Numero a: ')
  const num_b = get_number('Numero b: ')
 
  let numero = num_a > num_b ? num_a : num_b

  while (!(numero  % num_a === 0 && numero % num_b === 0)){ //enquanto a divisão do numero por a e b não for igual a zero, aumenta o numero + 1
    numero++

  }
  print('MMC: ' +numero);
  
}
  

main()