// Imprimir os primeiros 10 números da sequência de Fibonacci.
 let pn = 0;
 let sn = 1;
 let tn;

console.log(pn);
console.log(sn);

for (contagem = 0; contagem <100; contagem++) { // o for vai passar pelos "casas" e a equacao faz a sequencia surgir.

    tn = pn + sn;
    pn = sn;
    sn = tn;    
    console.log(sn);
}
