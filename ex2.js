function interation(numInteracoes, funcao) {
    for (let interacao = 1; interacao <= numInteracoes; interacao++) {
        funcao(interacao);
    }
}

function arraySum(funcao,...numbers) {
    //let soma = 0;
    //numbers.forEach((value) => soma += value);
    let soma = numbers.reduce((acc,cur) => acc += cur , 0)
    funcao(soma);
}

interation(3, console.log);
arraySum(console.log, 1, 2, 3);