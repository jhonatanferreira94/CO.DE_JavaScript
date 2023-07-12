let prompt = require(`prompt-sync`)()

let numero = parseInt(prompt("Digite um numero: "))
let restante = numero%2

if(restante==0){
    console.log("O numero é par!")
} else{
    console.log("O número é impar")
}
