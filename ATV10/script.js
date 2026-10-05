let botao = document.getElementById("botao");
let resetar = document.getElementById("resetar");

let cartao = document.getElementById("cartao");
let titulo = document.getElementById("titulo");
let nome = document.getElementById("nome");
let descricao = document.getElementById("descricao");
let mensagem = document.getElementById("mensagem");

botao.onclick = function alterarPagina() {
    cartao.style.backgroundColor = "blue";
    cartao.style.color = "white";
    
    titulo.textContent = "laosseP oãçatneserpA";
    nome.textContent = "Briel³";
    mensagem.textContent = "Supernothinggoingnowherefastandidontcare";

    mensagem.style.fontSize = "0.5rem";
}

resetar.onclick = function resetarPagina() {
    cartao.style.backgroundColor = "rgb(180, 84, 84)";
    cartao.style.color = "black";
    
    titulo.textContent = "Apresentação Pessoal";
    nome.textContent = "Gabriel Santos";
    mensagem.textContent = "....a flower?";

    mensagem.style.fontSize = "1.2rem";
}