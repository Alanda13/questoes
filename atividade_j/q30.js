import { get_text, get_number, print } from '../utils/io_utils.js';

function main() {
        let nomeProduto = "";
        let precoUnitario = 0;
        let quantidade = 0;
        
        while (nomeProduto !== "FIM") {
            nomeProduto = get_text("Digite o nome do produto (ou 'FIM' para encerrar):");
            if (nomeProduto === "FIM") break;
            
            precoUnitario = get_number("Digite o preço unitário do produto:");
            quantidade = get_number("Digite a quantidade comprada do produto:");
            
            let valorTotal = 0;
            
            if (quantidade <= 10) {
                valorTotal = precoUnitario * quantidade;
            } else if (quantidade <= 20) {
                valorTotal = precoUnitario * quantidade * 0.9; 
            } else if (quantidade <= 50) {
                valorTotal = precoUnitario * quantidade * 0.8; 
            } else {
                valorTotal = precoUnitario * quantidade * 0.75; 
            }
            
            console.log(`Produto: ${nomeProduto}, Valor Total: R$ ${valorTotal.toFixed(2)}`);
        }
    }
    
    main();
    