// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

let prompt = require(`prompt-sync`)()

let numero1 = parseInt(prompt("Digite um número: "));
let numero2 = parseInt(prompt("Digite um número: "));
let numero3 = parseInt(prompt("Digite um número: "));

if (numero1 < numero2 && numero2 < numero3){
    console.log("Ordem crescente!")
} else if (numero3 < numero2 && numero2 < numero1){
    console.log("Ordem decrescente!")
} else {
    console.log("Tente novamente!")
}
