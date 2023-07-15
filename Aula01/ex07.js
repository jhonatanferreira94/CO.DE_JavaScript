// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.
let prompt = require(`prompt-sync`)()


let usuario = (prompt("Digite seu usuário: "));
let senha = (prompt("Digite sua senha: "));

if (usuario == "admin" && senha == "senha123"){
    console.log("Olá, bem-vindo!")
} else{
    console.log("Acesso negado!")
}