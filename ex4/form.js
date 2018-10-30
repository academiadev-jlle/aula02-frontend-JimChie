document.addEventListener('DOMContentLoaded', onLoadDOM);

function onLoadDOM() {
    document.querySelector('#btn-enviar').addEventListener('click', addAcao);
}

function addAcao(evet) {
    const form = document.querySelector('.form-acao');
    const acao = form.inputAcao.value;
    const preco = form.inputPreco.value;

    const row = document.createElement('tr');
    const infoAcao = document.createElement('td');
    const infoPreco = document.createElement('td');
    const infoStatus = document.createElement('td');


    infoAcao.textContent = acao.toUpperCase();
    infoPreco.textContent = parseFloat(preco).toFixed(2);
    infoStatus.textContent =  mensagemPreco(parseFloat(preco).toFixed(2));
    // infoStatus.classList.add(parseInt(preco) > 50 ? 'statusSell' : 'statusBuy');

    row.appendChild(infoAcao);
    row.appendChild(infoPreco);
    row.appendChild(infoStatus);

    const tabela = document.querySelector('.tabelaAcao tbody');
    tabela.appendChild(row);
}

function mensagemPreco(preco) {
    if (preco > 50) {
        return 'Venda e Profit!!';
    }
    else if (preco < 50) {
        return 'Compre tá barato!!';
    }
    else {
        return 'Manter em Carteira!';
    }
}