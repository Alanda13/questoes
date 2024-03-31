import { get_number, print } from '../utils/io_utils.js'

function main(){
    const numero_inicial = get_number('Digite um numero: ')
    calculando_lista(numero_inicial);
}
function calculando_lista(numero_inicial){
    let numero2 = get_number('Digite um outro numero: ')
    let numero3 = get_number('Digite um outro numero: ')
    while(numero2 + numero3 !== numero_inicial ){
        print(numero2);
        numero2 = numero3
        numero3 = get_number('Digite outro numero: ')

    }
    print(numero2)
    print(numero3)

}
main()