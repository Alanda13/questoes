import { get_number, get_text, print } from '../utils/io_utils.js'

function main(){
    let matricula = get_number('Numero da matricula: ')

    let qtd_alunos = 0;
    let qtd_aprovados = 0;
    let qtd_reprovados = 0;


    while(matricula !== 0){
        let nota_1 = get_number('Nota 1: ')
        let nota_2 = get_number('Nota 2: ')
        let nota_3 = get_number('Nota 3: ')

        let media_final = calculando_media(nota_1, nota_2, nota_3)

        if (media_final >= 7){
            qtd_aprovados++
            print('Aprovado!')
        }else{
            qtd_reprovados++
            print('Reprovado!')
        }
        qtd_alunos ++
        matricula = get_number('Numero da matricula (dgite 0 para finalizar): ')
    }
    print(
    `------------RESULTADO------------------
    - Total de aprovados = ${qtd_aprovados}
    - Total de reprovados = ${qtd_reprovados}
    - Total de alunos da turma = ${qtd_alunos}
    ----------------------------------------`)
   
}
function calculando_media(nota_1, nota_2, nota_3){
    return ((2 * nota_1) + (3 *  nota_2) + (5 * nota_3)) / 10

}
main()