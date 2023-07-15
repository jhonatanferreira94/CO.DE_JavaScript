// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:

// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3

let prompt = require(`prompt-sync`)()

let peso = parseFloat(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite o seu peso: "));
let IMC = peso / (altura*altura)

if(IMC<=18.5){
    console.log(`Abaixo do peso: ${IMC.toFixed(0)}`)
} else if(IMC>=25 && IMC<=29.9){
    console.log(`Sobrepeso: ${IMC.toFixed(0)}`)
}else if(IMC>=30 && IMC<=34.9){
    console.log(`Obesidade grau 1: ${IMC.toFixed(0)}`)
}else if(IMC>=35.0 && IMC<=39.9){
    console.log(`Obesidade grau 2: ${IMC.toFixed(0)}`)
}else{
    console.log(`Obesidade grau 3: ${IMC.toFixed(0)}`)
}



