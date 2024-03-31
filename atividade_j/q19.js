import {  get_number, get_text, print } from '../utils/io_utils.js'

function main(){
    let num_identificacao = get_number('Numero de identificacao: ');

    let num_ident_mais_magro = 0;
    let peso_mais_magro = 0;
    let num_ident_mais_gordo = 0;
    let peso_mais_gordo = 0;

    while(num_identificacao !== 0){
        let peso = get_number('Peso: ')

        if(peso > peso_mais_gordo || !peso_mais_gordo){
            num_ident_mais_gordo = num_identificacao;
            peso_mais_gordo = peso;
        }
        if( peso < peso_mais_magro || !peso_mais_magro){
            num_ident_mais_magro = num_identificacao;
            peso_mais_magro = peso;
        }
        num_identificacao = get_number('Numero de identificacao: ')
    }
    const resultado = `
    --------RESULTADO-----------
    BOI MAIS MAGRO
    - NUM IDENTIFICAÇÃO: ${num_ident_mais_magro} 
    - PESO: ${peso_mais_magro} kg
    BOI MAIS GORDO
    - NUM IDENTIFICAÇÃO: ${num_ident_mais_gordo}
    - PESO: ${peso_mais_gordo} kg
    -----------------------------`

    print(resultado)


}
main()