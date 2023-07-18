// Imprimir os primeiros 10 números da sequência de Fibonacci.
 let pn = 0;
 let sn = 1;
 let tn;

for (contagem = 0; contagem <10; contagem++) {

    tn = pn + sn;
    pn = sn;
    sn = tn;    
    console.log(sn);
}
