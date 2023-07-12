// Faça um programa que receba o nome, cargo e salário de um
// funcionário. Se o funcionário ganhar abaixo de 1000 reais, calcule o
// salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário
// desse funcionário.

let prompt = require(`prompt-sync`)()

let nome = (prompt("Digite o seu nome: "));
let cargo = (prompt("Digite o seu cargo: "));
let salario = parseInt(prompt("Digite o seu salário: "));
let acrescido = parseInt(prompt("Digite o valor do acrescido: "));

if(salario<=1000){
    let novoSalario=salario+(salario*(acrescido/100))
    console.log(nome+", o seu salário hoje é R$"+salario+" na função de "+cargo+" com o aumento você passara a receber R$"+novoSalario+".")
}else{
    console.log("Você não terá aumento no mês atual!")
}
