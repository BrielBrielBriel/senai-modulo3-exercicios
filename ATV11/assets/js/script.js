// VARIAVEIS
let tituloInicio = document.getElementById("titulo-inicio");
let conhecer = document.getElementById("conhecer");
let botaoConhecer = document.getElementById("botao-conhecer");
let inicioResetar = document.getElementById("reset-inicio");


let mensagemDevSite = document.getElementById("mensagem-dev-site");
let mensagemDevApp = document.getElementById("mensagem-dev-app");
let mensagemSistemas = document.getElementById("mensagem-sistemas");

let botaoDevSite = document.getElementById("botao-dev-site");
let botaoDevApp = document.getElementById("botao-dev-app");
let botaoSistemas = document.getElementById("botao-sistemas");
// INÍCIO

botaoConhecer.onclick = function conhecerEmpresa() {
    conhecer.textContent = "Bem-vindo à TechSolutions! Estamos prontos para transformar sua ideia em realidade.";

    tituloInicio.style.color = "black";

    window.alert("Bem-vindo à TechSolutions! Estamos prontos para transformar sua ideia em realidade.");
}

inicioResetar.onclick = function resetarInicio() {
    conhecer.textContent = "Clique no botão para conhecer nossa empresa."

    tituloInicio.style.color = "white";
}

// SERVIÇOS

botaoDevSite.onclick = function mudarMensagemSite () {
    mensagemDevSite.style.color = "";
}

botaoDevApp.onclick = function mudarMensagemApp () {
    mensagemDevApp.textContent = "";
}
