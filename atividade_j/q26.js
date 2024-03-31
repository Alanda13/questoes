import { enter_to_continue, get_number, get_number_in_range, get_text, print } from '../utils/io_utils.js'

function main(){
    const menu = `
    -----OPINIAO SOBRE O FILME------
    1 = Responder questionario
    2 = Mostrar dados
    -1 = Encerrar
    --------------------------------
    >>>>>>> opcao:  `
    let opcao = get_number_in_range(menu, -1, 2)

    let soma_idade_otimo = 0;
    let qtd_pessoas_otimo = 0;
    let qtd_pessoas_regular = 0;
    let qtd_pessoas_bom = 0;
    let qtd_entrevistados = 0;

    while (opcao !== -1){
        if(opcao === 1){
            const idade = get_number('Sua idade: ')
            const avaliacao_filme = get_text(' Avaliação do filme: 1-otimo \n 2-bom \n 3-regular \n 4-pessimo ')
            const avaliacao_escolhida = get_number('Sua opcao: ')
            qtd_entrevistados ++

            if (avaliacao_escolhida === 1){
                soma_idade_otimo += idade
                qtd_pessoas_otimo ++
            }else if (avaliacao_escolhida === 3){
                qtd_pessoas_regular ++
            }else if(avaliacao_escolhida === 2){
                qtd_pessoas_bom ++
            }
        }else if(opcao === 2){
            const media_idade_otimo = soma_idade_otimo / qtd_pessoas_otimo
            //const qtd_pessoas_regular =
            const percentual_pessoas_bom = (qtd_pessoas_bom/100) * qtd_entrevistados


            const resultado = `
            -------------------------------DADOS----------------------------------------------
            · a média das idades das pessoas que responderam ótimo: ${media_idade_otimo}
            · a quantidade de pessoas que respondeu regular: ${qtd_pessoas_regular}
            · o percentual de pessoas que respondeu bom entre os entrevistados: ${percentual_pessoas_bom}%
            -------------------------------------------------------------------------------------`
           print(resultado) 
        }
        enter_to_continue()
        clear_screen()
        // Pedir opcao
        opcao = get_number_in_range(menu, -1, 2)
    }

}
main()