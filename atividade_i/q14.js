import {  get_number, get_number_in_range, get_text, print } from '../utils/io_utils.js'

function main(){
    const opiniao = `
    ----------------------------
    ESCOLHA ENTRE OS CANDIDATOS: 
    SERRA = 45
    DILMA = 13
    CIRO GOMES = 23
    ----------------------------
    OU ENTAO:
    ----------------------------
    INDECISO = 99
    OUTROS = 98
    NULO/BRANCO = 0
    ---------------------------
    -1 PARA ENCERRAR
    ---------------------------
    SUA OPCAO = `

    let opcao = get_number_in_range(opiniao, -1, 99)

    let qtd_serra= 0;
    let qtd_dilma = 0;
    let qtd_ciro = 0;
    let qtd_outros = 0;
    let qtd_indecisos = 0;
    let qtd_nulos = 0;
    let total_entrevistados = 0;

    while(opcao !== -1){
        if (opcao === 45){ //serra
            total_entrevistados++
            qtd_serra++
        }else if(opcao === 13){ //dilma
            total_entrevistados++
            qtd_dilma++
        }else if(opcao === 23){ //ciro
            total_entrevistados++
            qtd_ciro++
        }else if(opcao === 99){
            total_entrevistados
            qtd_indecisos++
        }else if(opcao === 98){
            total_entrevistados++
            qtd_outros
        }else if(opcao === 0){
            total_entrevistados++
            qtd_nulos++
        }
        opcao = get_number_in_range(opiniao, -1, 99)

    }if(opcao === -1){

        const porcentagem_serra = calcular_porcentagem(qtd_serra, total_entrevistados)
        const porcentagem_dilma = calcular_porcentagem(qtd_dilma, total_entrevistados)
        const porcentagem_ciro = calcular_porcentagem(qtd_ciro, total_entrevistados)
        const porcentagem_outros = calcular_porcentagem(qtd_outros, total_entrevistados)
        const porcentagem_indecisos = calcular_porcentagem(qtd_indecisos, total_entrevistados)
        const porcentagem_nulos_brancos = calcular_porcentagem(qtd_nulos, total_entrevistados)
        const eh_2_turno = calculando_2_turno(porcentagem_serra, porcentagem_dilma, porcentagem_ciro)

        const resultado = `
        -------------RESULTADO--------------------
        · PORCENTAGEM DE CADA CANDIDATO:
        - SERRA: ${porcentagem_serra.toFixed(1)}%
        - DILMA: ${porcentagem_dilma.toFixed(1)}%
        - CIRO:  ${porcentagem_ciro.toFixed(1)}%
        · PORCENTAGEM DE (OUTROS) CANDIDATOS: ${porcentagem_outros.toFixed(1)}%
        · PORCENTAGEM DE ELEITORES INDECISOS: ${porcentagem_indecisos.toFixed(1)}%
        · PORCENTAGEM DE VOTOS NULOS/ BRANCOS:  ${porcentagem_nulos_brancos.toFixed(1)}%
        · TOTAL DE ENTREVISTADOS: ${total_entrevistados.toFixed(1)}
        · POSSIBILIDADE DE 2 TURNO: ${eh_2_turno}
        ---------------------------------------------
        `
        print(resultado)
    }

}
function calcular_porcentagem( qtd, total_entrevistados){
    return (qtd/total_entrevistados) * 100

}
function calculando_2_turno(porcentagem_serra, porcentagem_dilma, porcentagem_ciro){
    if (porcentagem_serra < 50 && porcentagem_dilma < 50 && porcentagem_ciro < 50) {
        return "Haverá segundo turno.";
    } else {
        return "Não haverá segundo turno.";
    }

}
main()