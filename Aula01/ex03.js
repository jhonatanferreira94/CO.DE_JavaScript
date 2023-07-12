// Faça um programa que receba um número inteiro do usuário e informe
// se este número é positivo ou negativo.

let prompt = require(`prompt-sync`)()

let numero = parseInt(prompt("Digite um número inteiro: "));

if(numero<0){
    console.log("O número digitado é negativo.")
}else if(numero>0){
    console.log("O número digitado é positivo.")
}else{
    console.log("O número digitado é igal a 0.")
}