let prompt = require(`prompt-sync`)()

let numero = parseInt(prompt("Digite um número de 1 a 9 e desebra uma exercício surpresa: "));

switch (numero) {
    case 1:

        console.log("1. Imprimir números de 1 a 10 utilizando o loop for.");

        for (let contador = 1; contador <= 10; contador++) {
            console.log(contador);
        }
        break;


    case 2:

        console.log("2. Imprimir números pares de 1 a 10.");

        for (let contador = 2; contador < 10; contador += 2) {
            console.log(contador);
        }
        break;


    case 3:
        console.log("3. Faça um programa que imprima os números ímpares de 0 a 50;");

        for (let contador = 1; contador < 50; contador += 2) {
            console.log(contador);
        }

        break;


    case 4:
        console.log("4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.");

        let prompt4 = require(`prompt-sync`)()

        let multiplicador = parseFloat(prompt4("Digite o multiplicador: "));

        for (let contador = 1; contador <= 10; contador++) {
            console.log(`${contador} x ${multiplicador} = ${contador * multiplicador}`);
        }
        break;

    case 5:
        console.log("5. Imprimir os primeiros 10 números da sequência de Fibonacci.");

        let pn = 0;
        let sn = 1;
        let tn;

        console.log(pn);
        console.log(sn);

        for (contagem = 0; contagem < 100; contagem++) { // o for vai passar pelos "casas" e a equacao faz a sequencia surgir.

            tn = pn + sn;
            pn = sn;
            sn = tn;
            console.log(sn);
        }

        break;

    case 6:
        console.log("6. Imprimir números pares de 0 a 20 utilizando o loop while.");

        let numero6 = 0;

        while (numero6 < 20) {

            numero6 += 2;
            console.log(numero6);
        }

        break;

    case 7:
        console.log("7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.");
        let prompt7 = require(`prompt-sync`)()

        let soma = 1;
        let numero7 = 1;
        let final = 0;

        while (final < 100) {
            soma = soma += 1;
            numero7 = numero7 += 1;
            final = soma + numero7;

            console.log(final)
        }
        break;
    case 8:
        console.log("8. Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.");

        const prompt8 = require(`prompt-sync`)()

        let numero8;

        do {
            numero8 = prompt8("Qual sua idade?: ");
        } while (numero8 != "18");


        break;

    case 9:
        console.log("9. Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.");
        const prompt = require(`prompt-sync`)()

        let numero9;

        do {
            numero9 = prompt("Digite um numero: ");
        } while (numero9 != "0");

        break;

    case 10:
        console.log("Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.");

        let prompt10 = require(`prompt-sync`)()

        let numero = prompt10('Digite um numero: ')
        let resultado = 1;


        while (resultado >= 1) {
            resultado = numero--;
            console.log(resultado)
        }

    default:
        break;
}

