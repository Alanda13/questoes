import { get_number, get_text, print } from '../utils/io_utils.js'

function main(){
    const qtd_containers = get_number('Quantidade de containers: ')
    const peso_carga = computar_peso_containers(qtd_containers)

    //dados passageiros
    let contador_passageiros = 0
    let contador_bagagens = 0
    let bilhete = get_number('Bilhete: ')

    while(bilhete !== 0){
        contador_passageiros ++  //quantidade de passageiros
        const bagagens = get_number('Quantidade de bagagens: ', 0)
        //trabalho
        contador_bagagens += bagagens

        bilhete = get_number('Bilhete: ')
    }

    const peso_passageiros = (contador_passageiros * 70) + (contador_bagagens * 10)
    const qtd_total_volume_bagagem = (contador_bagagens * 10)

    const peso_total_sem_combustivel = peso_passageiros + peso_carga
    const combustível_possivel = 500000 - peso_total_sem_combustivel
    const combustível_possivel_l = combustível_possivel / 1.5
    const autorizacao_decolagem = combustível_possivel_l  >= 10_000 ? 'SIM' : 'NÃO'
    

    const resultado = `
    ---------------------------------
    - Quantidade de passageiros : ${contador_passageiros}
    - Total de volume de bagagem : ${qtd_total_volume_bagagem}
    - Peso dos passageiros: ${peso_passageiros}
    - Peso da carga: ${peso_carga}
    - Quantidade possível de combustível: ${combustível_possivel_l.toFixed(2)}
    - Liberação da decolagem? ${autorizacao_decolagem}`

    print(resultado)

}
function computar_peso_containers(quantidade){
    let qtd_containers_lidos = 0
    let peso_total = 0

    while(qtd_containers_lidos < quantidade){
        const peso = get_number('Peso do Container: ')
        peso_total = peso_total + peso

        qtd_containers_lidos += 1
    }
    return peso_total
}
main()