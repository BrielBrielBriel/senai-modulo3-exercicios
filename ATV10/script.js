let botao = document.getElementById("botao");
let resetar = document.getElementById("resetar");
let corpo =  document.getElementById("corpo");
let foto = document.getElementById("foto");
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

    corpo.style.backgroundImage = "url('./imagens/cuddlemonster.jpg')";
}

resetar.onclick = function resetarPagina() {
    cartao.style.backgroundColor = "rgb(180, 84, 84)";
    cartao.style.color = "black";
    
    titulo.textContent = "Apresentação Pessoal";
    nome.textContent = "Gabriel Santos";
    mensagem.textContent = "....a flower?";

    mensagem.style.fontSize = "1.2rem";

    corpo.style.backgroundImage = "none";
    corpo.style.backgroundColor = "antiquewhite";
}