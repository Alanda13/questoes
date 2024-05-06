import { print, get_number } from "../utils/io_utils.js";

function main(){
    var N = get_number('Digite o número de fichas: ');
    var boi_maismagro = 0;
    var boi_maisgordo = 0;

    for (let i = 1; i <= N; i++) {
        var identificacao = get_number('Número de identificação do boi:');
        var peso = get_number('Peso do boi (em kg): ');

        if (peso < boi_maismagro.peso) {
            boi_maismagro.identificacao = identificacao;
            boi_maismagro.peso = peso;
        }

        if (peso > boi_maisgordo.peso) {
            boi_maisgordo.identificacao = identificacao;
            boi_maisgordo.peso = peso;
        }
    }

    print('----------------------------------------------')
    print(`Peso do boi mais gordo (em Kg): ${boi_maisgordo.peso}`)
    print(`Nº de Identificação do boi mais gordo: ${boi_maisgordo.identificacao}`)
    print(`Peso do boi mais magro (em Kg): ${boi_maismagro.peso}`)
    print(`Nº de Identificação do boi mais magro: ${boi_maismagro.identificacao}`)
    print('----------------------------------------------')

}
main()