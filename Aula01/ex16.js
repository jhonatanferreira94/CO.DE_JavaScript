// Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let prompt = require(`prompt-sync`)()

let multiplicador = parseFloat(prompt("Digite o multiplicador: "));

for (let contador = 1; contador <= 10; contador++) {
    console.log(`${contador} x ${multiplicador} = ${contador*multiplicador}`);
}

