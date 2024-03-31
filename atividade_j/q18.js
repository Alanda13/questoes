import { print } from '../utils/io_utils.js'

function main(){
    let pop_cidade_A = 200000;
    const taxaCrescimentoA = 3.5;
    let pop_cidade_B = 800000;
    const taxaCrescimentoB = 1.35;


    let anos = 0;

    
    while (pop_cidade_A <= pop_cidade_B) {
        pop_cidade_A *= (1 + taxaCrescimentoA / 100);
        pop_cidade_B *= (1 + taxaCrescimentoB / 100);
        anos++;
    }
    const resultado = `Serão necessários ${anos} anos para que a população da cidade A ultrapasse a população da cidade B`
    print(resultado)


}
main()