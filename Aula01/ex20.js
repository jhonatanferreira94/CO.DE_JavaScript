// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

const prompt = require(`prompt-sync`)()

let numero;

do {
    numero = prompt("Qual sua idade?: ");
}while(numero != "18");