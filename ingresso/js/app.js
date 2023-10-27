
function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso == 'superior') {
        comprarCadeiraSuperior(quantidade);
    } else {
        comprarCadeiraInferior(quantidade);
    }

}


function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidade > quantidadePista) {
        alert('Quantidade indisponível para este tipo de ingresso');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
} 

function comprarCadeiraSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent)

    if (quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível para este tipo de ingresso');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Compra realizada com sucesso!');
    }
}


function comprarCadeiraInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent)

    if (quantidade > quantidadeInferior) {
        alert('Quantidade indisponível para este tipo de ingresso');
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('Compra realizada com sucesso!');        ;
    }
}
