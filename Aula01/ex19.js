// Calcular a soma dos números de 1 a 100 utilizando a estrutura while.
let prompt = require(`prompt-sync`)()

let soma=1;
let numero=1;
let final = 0;

while (final<100) {
    soma = soma +=1;
    numero = numero +=1;
    final = soma + numero;

    console.log(final)
}