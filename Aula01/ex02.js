// Uma empresa decide dar aumento de 30% aos funcionários cujo
// salário é inferior a 500 reais. Escreva um programa que receba o
// salário de um funcionário e imprima o valor do salário reajustado ou
// uma mensagem caso o funcionário não tenha direito a aumento.

let prompt = require(`prompt-sync`)()

let salario = parseInt(prompt("Digite o seu salário: "));
let acrescido = parseInt(prompt("Digite o valor do acrescido: "));

if(salario<=500){
    let novoSalario=salario+(salario*(acrescido/100))
    console.log("0 seu salário hoje é R$"+salario+" com o aumento você passara a receber R$"+novoSalario+".")
}else{
    console.log("Você não terá aumento no mês atual!")
}
