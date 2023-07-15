// Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
let prompt = require(`prompt-sync`)()

let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
let anoAtual = parseInt(prompt("Digite o ano atual: "));

let resultado = anoAtual-anoNascimento

if (resultado>=18){
    console.log("Maior de idade!")
} else if (resultado>=1 && resultado<18){
    console.log("Menor de idade!")
}else {
    console.log("Tente novamente!")
}