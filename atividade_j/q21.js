import { get_number} from '../utils/io_utils.js'
function main() {
    function multiplicacaoSemOperador(num1, num2) {

        let resultado = 0;
        let contador = 0;
        let num2Abs = Math.abs(num2); 
    
        while (contador < num2Abs) {
            resultado += num1;
            contador++;
        }
        if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
            resultado = -resultado;
        }
    
        return resultado;
    }
    
    const num1 = 5;
    const num2 = 8;
    console.log("O resultado da multiplicação é:", multiplicacaoSemOperador(num1, num2));
}
main();

