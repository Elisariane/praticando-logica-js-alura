document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ '
let total = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    let subtotal = valor * quantidade;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valor}</span>
    </section>`;

    total = total + subtotal;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent =  `R$ ${total}`;
    
    document.getElementById('quantidade').value = 0
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ '
    total = 0;
}