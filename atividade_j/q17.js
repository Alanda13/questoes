import {  get_number, get_text, print } from '../utils/io_utils.js'

function main(){
    let nome = get_text('Seu nome: ')

    let nomeMaisAlta = "";
    let alturaMaisAlta = 0;
    let nomeMaisBaixa = "";
    let alturaMaisBaixa;
    let nomeMaisMagra = "";
    let pesoMaisMagro = 0;
    let nomeMaisGorda = "";
    let pesoMaisGordo = 0;

    while (nome !== 'FIM') {
        let altura = get_number('Altura (em m): ');
        let peso = get_number("Peso (em kg):");
    
        if (altura > alturaMaisAlta || !alturaMaisAlta) {
            nomeMaisAlta = nome;
            alturaMaisAlta = altura;
        }
        if (altura < alturaMaisBaixa || !alturaMaisBaixa) {
            nomeMaisBaixa = nome;
            alturaMaisBaixa = altura;
        }
        if (peso < pesoMaisMagro || !pesoMaisMagro) {
            nomeMaisMagra = nome;
            pesoMaisMagro = peso;
        }
        if (peso > pesoMaisGordo || !pesoMaisGordo) {
            nomeMaisGorda = nome;
            pesoMaisGordo = peso;
        }
         nome = get_text('Seu nome: ');
    }
    const resultado = `
    -------RESULTADO---------
    - CANDIDATA MAIS ALTA
    NOME: ${nomeMaisAlta}
    ALTURA: ${alturaMaisAlta}m
    - CANDIDATA MAIS BAIXA
    NOME: ${nomeMaisBaixa}
    ALTURA: ${alturaMaisBaixa}m
    - CANDIDATA MAIS MAGRA
    NOME: ${nomeMaisMagra}
    PESO: ${pesoMaisMagro}kg
    - CANDIDATA MAIS GORDA
    NOME: ${nomeMaisGorda}
    PESO: ${pesoMaisGordo}kg
    ------------------------- `
    print(resultado)
   
}
main()