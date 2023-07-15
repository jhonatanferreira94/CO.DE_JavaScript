let prompt = require(`prompt-sync`)()


// let nomes = ["Alana", "Aléxia", "Samanta", "Thiago", "Odirlei"]
//              0         1         2          3         4


// for (let contador = 0; contador < nomes.length; contador++) {
//     const cadaElemento = nomes[contador];
//     console.log(cadaElemento);
// }

// o for manipula a ordem que a lista vai ser lida, ideal para situações específicas

// nomes.forEach(cadaElemento => {
//     console.log(cadaElemento);
// })


// mesma lista, so que mostrando o indice 

// nomes.forEach((cadaElemento, indice) => {
//     console.log(indice , cadaElemento);
// })

// forEach é bom usar quando eu apenas quiser ler uma lista

// const frutas = ["Pera", "Uva", "Maca", "Salada Mista"]

// for (let contador = 0; contador < frutas.length; contador++) {
//     const cadaElemento = frutas [contador];
//     console.log(cadaElemento);
// }

// frutas.forEach(cadaElemento =>{
//     console.log(cadaElemento);
// })

// let salario = 1000;
// let contador = 0;

// while (salario<5000) {
//     salario += 100;
//     contador++; //para contar a quantidade de vezes que foram executadas.
//     console.log("O seu salário ainda é R$ " + salario);
// }
// console.log(contador);

// do {
//     salario += 100;
//     console.log("O salário ainda é R$" +salario);
// } while ( salario < 5000);

// let numeroEscolhido;

// do{
//     numeroEscolhido = prompt("Digite um número inteiro: ");
// }while(numeroEscolhido !="5");

let senha;
do{
    senha = prompt("Digite a senha: ")
    if(senha!="123"){
        console.log("Senha Incorreta");
    }
}while(senha!="123");
console.log("Senha correta");

