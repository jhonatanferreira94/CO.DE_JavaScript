// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

let prompt = require(`prompt-sync`)()

let valorCompra = parseInt(prompt("Digite o valor da compra: "));

if(valorCompra > 100 && valorCompra <= 200){
    let novoValor = valorCompra-(valorCompra*(10/100))
    console.log(`O valor final da compra: R$${novoValor}`)

} else if (valorCompra > 200){
    let novoValor = valorCompra-(valorCompra*(20/100))
    console.log(`O valor final da compra: R$${novoValor}`)
}else{
    console.log("Sem desconto, baby!")
}