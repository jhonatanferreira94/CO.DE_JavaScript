let prompt = require(`prompt-sync`)()

let letra = prompt("Digite uma letra: ")
let numero = prompt("Digite um numero: ")

if(letra == "a" || numero == "1"){
    console.log("Acertou!")
} else{
    console.log("Errou!")
}