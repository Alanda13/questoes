import { get_number, get_number_in_range, print } from '../utils/io_utils.js'

function main(){
    const dados = `
    -----------------
    1 - Ler dados
    2 - Mostrar dados
    0 - Sair
    -----------------
    >> Sua opcao: `

    let opcao = get_number_in_range(dados, 0, 2)

    let qtd_homens = 0;
    let soma_idade_H = 0;
    let qtd_homens_solteiros = 0;
    let qtd_mulheres = 0;
    let soma_idade_M = 0;
    let qtd_mulheres_solteiras = 0;
    let qtd_mulheres_divorciadas_mais30 = 0;

    while (opcao !== 0){
        if (opcao === 1){  //se a opção for igual a 1, os dados do participante serão lidos
            const sexo = get_number('Sexo (1- masculino e 2 - feminino)')
            const idade = get_number('Idade: ')
            const estado_civil = get_number('Estado civil (1-casado, 2-solteiro, 3-divorciado, 4-viuvo): ')

            if (sexo === 1){
                qtd_homens ++
                soma_idade_H += idade

                if (estado_civil === 2){
                    qtd_homens_solteiros ++
                }
            }else{
                qtd_mulheres ++
                soma_idade_M += idade

                if (estado_civil == 2){
                    qtd_mulheres_solteiras ++
                }
                if (estado_civil === 3 && idade > 30){
                    qtd_mulheres_divorciadas_mais30 ++
                }
            }
        }else if(opcao === 2){   // opção numero 2 vai mostrar os dados
            const media_idade_M = soma_idade_M / qtd_mulheres
            const media_idade_H = soma_idade_H / qtd_homens
            const percentual_H_solteiros = (qtd_homens_solteiros / 100) * qtd_homens
            const percentual_M_solteiras = (qtd_mulheres_solteiras / 100) * qtd_mulheres


            const resultado = `
            -----------------Mostrando dados------------------------------
            · Média de idade das mulheres: ${media_idade_M}
            · Média de idade dos homens; ${media_idade_H}
            · O percentual de homens solteiros; ${percentual_H_solteiros}
            · O percentual de mulheres solteiras; ${percentual_M_solteiras}
            · A quantidade de mulheres divorciadas acima de 30 anos. ${qtd_mulheres_divorciadas_mais30}
            ---------------------------------------------------------------- `

            print(resultado)

        }
        opcao = get_number_in_range(dados, 0, 2)
        

    }
}
main()