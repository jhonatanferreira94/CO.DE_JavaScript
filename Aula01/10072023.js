console.log("Hello World!");

let prompt = require(`prompt-sync`)()

// let nome = prompt(`Digite seu nome: `)
// console.log(`Olá `+ nome)

let numero = prompt('Digite um numero: ')
if (numero > 10) {
    console.log(`O numero e maior que 10`)
} else if (numero == 10) {
    console.log(`O numero e igual a 10`)
} else {
    console.log(`O numero e menor que 10`)
}

let letra = prompt('Digite uma letra: ')

switch (letra) {
    case "a":
        console.log("Letra A");
        break;
    case "b":
        console.log("Letra B");
        break;
        case "c":
            console.log("Letra C");
            break;
    default:
        break;
}


let pNum = parseInt(prompt("Digite o primeiro numero: "));
let sNum = prompt("Digite o segundo numero: ");

let soma = pNum + parseInt(sNum);

if(soma>10){
    console.log("A somo é: "+soma+" e é maior que 10")
}else if(soma==10){
    console.log("A soma é: "+soma+"e é igual a 10")
}else{
    console.log("A soma é: "+soma+"e é menor que a 10")
}






