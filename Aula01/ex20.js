// Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

import promptSync from "prompt-sync";

const prompt = promptSync();


//sem function

// const prompt = require(`prompt-sync`)()

// let numero;

// do {
//     numero = prompt("Qual sua idade?: ");
// } while (numero != "18");

//com functionun

export function verificarIdade() {
    console.log("Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar aidade e mostre uma mensagem quando a idade do usuário for maior que 18.")

    let pessoa = {
        nome: "",
        idade: 0
    }

    do {
        pessoa.idade = parseInt(prompt("Digite a sua idade: "));
        pessoa.nome = prompt("Digite o seu nome:  ")
    } while (pessoa.idade < 18);
    console.log("Idade válida!");
    console.log("Objeto: ", pessoa);
    console.log(`${pessoa.nome}, sua idade ${pessoa.idade}, é válida!`);
}

