import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { exercicio11 } from "./ex11.js";
import { exercicio12 } from "./ex12.js";
import { exercicio13 } from "./ex13.js";
import { exercicio14 } from "./ex14.js";


let exercicio = 0;
let continuar;

do {
    exercicio = parseInt(prompt("Digite um número que representa um exercício de 1 a 4: "));

    switch (exercicio) {
        case 1:
            exercicio11();
            break;

        case 2:
            exercicio12();
            break;

        case 3:
            exercicio13();
            break;

            case 4:
                exercicio14()
            break;


        default:
            break;
    }

    continuar = prompt("Deseja continuar e ver outros exercícios?");

} while (continuar.toLocaleLowerCase() === "s");