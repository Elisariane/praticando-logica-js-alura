
let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;

    if (amigo == '') {
        alert('O nome do amigo deve ser inserido');
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo);

    if (listaAmigos.textContent == ''){
        listaAmigos.textContent = amigo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo;
    }

    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let index = 0; index < amigos.length; index++) {

        if (index == amigos.length -1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[index] + '--> ' + amigos[0] + '<br>';
        }

        sorteio.innerHTML = sorteio.innerHTML + amigos[index] + '--> ' + amigos[index + 1] + '<br>';
    }

}

function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio') = ''
}


