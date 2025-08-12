//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
amigos = [];
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if(nome){
        amigos.push(nome);
        console.log(amigos);
        document.getElementById("amigo").value = "";
    }else{
        console.log("Digite um nome antes de adicionar.");
    }
}