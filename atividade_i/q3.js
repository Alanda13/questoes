import { get_number, print } from '../utils/io_utils.js'

//3. Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.

function main(){
    const num_a = get_number('Numero A: ')
    const num_b = get_number('Numero B: ')

    let resultadto = calcular_mdc(num_a, num_b)
    print('MDC: ' +resultadto)
 
}
function calcular_mdc(num_a, num_b){
    while (num_b !== 0) {
        let temp = num_b;
        num_b = num_a % num_b;
        num_a = temp;
    }
    return num_a;

}

main()