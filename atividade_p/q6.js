import { print } from "../utils/io_utils.js";

function main(){
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            print(i + " x " + j + " = " + (i * j));
        }
        print("-------------"); 
    }
    
}
main()