import {  get_number, print } from '../utils/io_utils.js'

function main(){
    let numero_canal = get_number('Numero do canal: \n 2 \n 4 \n 5 \n 7 \n 10 \n Seu canal: ')

    let qtd_pessoas_2 = 0;
    let qtd_pessoas_4 = 0;
    let qtd_pessoas_5 = 0;
    let qtd_pessoas_7 = 0;
    let qtd_pessoas_10 = 0;
    let total_pessoas = 0;

    while(numero_canal !== 0){
        let qtd_pessoas = get_number('Numero de pessoas assistindo TV: ');


        if (numero_canal === 2){
            qtd_pessoas_2 += qtd_pessoas
        }else if(numero_canal === 4){
            qtd_pessoas_4 += qtd_pessoas
        }else if(numero_canal === 5){
            qtd_pessoas_5 += qtd_pessoas
        }else if(numero_canal === 7){
            qtd_pessoas_7 += qtd_pessoas
        }else if(numero_canal === 10){
            qtd_pessoas_10 += qtd_pessoas
        }
        total_pessoas += qtd_pessoas;
        numero_canal = get_number('Numero do canal: \n 2 \n 4 \n 5 \n 7 \n 10 \n Seu canal: ')
    }
     if (numero_canal === 0){

    const percentual_audiencia_2 = (qtd_pessoas_2 / total_pessoas) * 100;
    const percentual_audiencia_4 = (qtd_pessoas_4 / total_pessoas) * 100;
    const percentual_audiencia_5 = (qtd_pessoas_5 / total_pessoas) * 100;
    const percentual_audiencia_7 = (qtd_pessoas_7 / total_pessoas) * 100;
    const percentual_audiencia_10 = (qtd_pessoas_10 / total_pessoas) * 100;

        const resultado = `
        ------------RESULTADO-------------------
        canal 2 - audiência = ${percentual_audiencia_2.toFixed(1)}%
        canal 4 - audiência = ${percentual_audiencia_4.toFixed(1)}%
        canal 5 - audiência = ${percentual_audiencia_5.toFixed(1)}%
        canal 7 - audiência = ${percentual_audiencia_7.toFixed(1)}%
        canal 10 - audiência = ${percentual_audiencia_10.toFixed(1)}% 
        -----------------------------------------`

        print(resultado)

     }
    
        
        

        
        
    
}




main()