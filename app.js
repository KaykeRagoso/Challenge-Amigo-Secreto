//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if(nome){
        amigos.push(nome);
        listaAmigos(amigos);
        document.getElementById("amigo").value = "";
    }else{
        alert("Por favor, insira um nome.");
    }
}

function listaAmigos(amigos) {
    let ultimoAmigo = amigos.length - 1;
    let isListado = false
    for (let index = 0; index < amigos.length; index++) {
        const amigoListado = amigos[index-1];
        const amigoNovo = amigos[ultimoAmigo];
        if (amigoListado == amigoNovo){
           alert(`O amigo de nome ${amigoNovo} já foi listado.`);
           amigos.pop();
           ultimoAmigo = amigos.length - 1;
           document.getElementById("amigo").value = "";
           isListado = false
           break
        }else{
            isListado = true
        }
    }
    if (isListado){
        const div = document.getElementById('listaAmigos');
        const listadeAmigos = document.createElement('li');
    
        listadeAmigos.textContent = `${amigos[ultimoAmigo]}`;
        div.appendChild(listadeAmigos);
    }
}
function sortearAmigo() {
    let numAmigo = amigos.length;
    if(numAmigo > 0){
        let num = Math.floor(Math.random() * numAmigo);
        nomeSorteado = amigos[num];
        document.getElementById("resultado").innerHTML = `O nome do seu amigo sorteado é ${nomeSorteado}`;

    }else{
        alert(`Adicione ao menos um nome na lista para você poder sortear`);
    }
}
