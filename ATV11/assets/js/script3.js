let botaoContato = document.getElementById("botao-contato");
let mensagemContato = document.getElementById("mensagem-contato");

let contatoResetar = document.getElementById("reset-contato");

let corpoContato = document.getElementById("corpo-contato");
let formulario = document.getElementById("formulario");
let areaNome = document.getElementById("nome");
let areaEmail = document.getElementById("email");
let areaAssunto = document.getElementById("assunto");
let areaMensagem = document.getElementById("mensagem");

let modoClaroContato = document.getElementById("modo-claro-contato");
let modoEscuroContato = document.getElementById("modo-escuro-contato");

modoEscuroContato.onclick = function ativarModoEscuroContato() {
    corpoContato.style.backgroundColor = "rgb(54, 54, 54)";
    corpoContato.style.color = "white"
    
    mensagemContato.style.color = "white";

    formulario.style.backgroundColor = "rgb(10, 10, 10)";
}

modoClaroContato.onclick = function ativarModoClaroContato() {
    corpoContato.style.backgroundColor = "#dadada";
    corpoContato.style.color = "black";
    
    mensagemContato.style.color = "black";
    
    formulario.style.backgroundColor = "white";
}

contatoResetar.onclick = function resetarContato() {
    mensagemContato.textContent = "Preencha o formulário abaixo e nossa equipe entrará em contato com você.";

    mensagemContato.style.color = "black"; 
}

botaoContato.onclick = function enviarFormulario() {
    mensagemContato.textContent = "Mensagem enviada com sucesso! A equipe TechSolutions entrará em contato em breve.";
    
    mensagemContato.style.color = "red";
    
    window.alert("Mensagem enviada com sucesso!");
}
