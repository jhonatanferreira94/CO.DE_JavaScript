//Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.

let prompt = require(`prompt-sync`)()

let numero = prompt('Digite um numero: ')
let resultado=1;


while (resultado>=1) {
    resultado = numero --;
    console.log (resultado)
}