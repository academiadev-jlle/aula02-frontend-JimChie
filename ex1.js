function menorNumero(...numeros) {
    let menor = numeros[0];
    /*for (let i = 0; i < numeros.length ; i++) {
        let atual = numeros[i];
        //console.log(k);
        if (atual < menor) {
            menor = atual;
        }
    }*/
    numeros.forEach(atual => menor = atual < menor ? atual : menor);
    return menor;
}

let b = menorNumero(0,2,4,-1,5,10,50);
console.log(b);
console.log(menorNumero(4,5,1,3));