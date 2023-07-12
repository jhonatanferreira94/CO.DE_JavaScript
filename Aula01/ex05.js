// Faça um programa receba dois valores e imprima qual é o maior
// número digitado.

let prompt = require(`prompt-sync`)()

let numero01 = parseInt(prompt("Digite um número inteiro: "));
let numero02 = parseInt(prompt("Digite outro número inteiro: "));

if(numero01>numero02){
    console.log("O primeiro número é maior que o segundo.")
}else if(numero01<numero02){
    console.log("O segundo número é maior que o primeiro.")
}else{
    console.log("Os números digitados são iguais.")
}