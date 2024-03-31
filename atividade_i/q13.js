import {  get_number, get_number_in_range, print } from '../utils/io_utils.js'

function main(){
    let salario = get_number('Seu salario: ')

    let soma_salario_atual = 0;
    let soma_salario_reajustado = 0;

    while (salario !== 0){
        soma_salario_atual += salario
        const novo_salario = calcular_novo_salario(salario)
        soma_salario_reajustado += novo_salario 
        salario = get_number('Seu salario: ') 

                                                                                                                                  

    }if(salario === 0){

        const diferenca_soma = soma_salario_reajustado - soma_salario_atual;
        

        const resultado = `
        ---------------------------------------------
        soma dos salarios atuais : ${soma_salario_atual}
        soma dos salarios reajustados : ${soma_salario_reajustado}
        diferença entre as 2 somas: ${diferenca_soma}
        ----------------------------------------------`
        print(resultado)
    }

}
function calcular_novo_salario(salario){
    if (salario <= 2999.99) {
        return salario * 1.25; // Acréscimo de 25%
    } else if (salario <= 5999.99) {
        return salario * 1.20; // Acréscimo de 20%
    } else if (salario <= 9999.99) {
        return salario * 1.15; // Acréscimo de 15%
    } else {
        return salario * 1.10; // Acréscimo de 10%
    }

}
main()

