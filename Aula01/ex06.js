// Faça um programa que receba 4 notas de um aluno, calcule e
// imprima a média aritmética das notas e a mensagem de APROVADO
// para média superior ou igual a 7,0 RECUPERAÇÃO para notas entre
// 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

let prompt = require(`prompt-sync`)()

let nota01 = parseInt(prompt("Digite a primeira nota: "));
let nota02 = parseInt(prompt("Digite a segunda nota: "));
let nota03 = parseInt(prompt("Digite a terceira nota: "));
let nota04 = parseInt(prompt("Digite a quarta nota: "));

let media = (nota01+nota02+nota03+nota04)/4

if(media>=7){
    console.log("Parabéns, você foi aprovado! Nota: "+media)
} else if(media >= 5 && media < 7) {
    console.log("Você precisa fazer RECUPERAÇÃO! Nota: "+media)
}else{
    console.log("Você foi reprovado! Nota: "+media) 
}
