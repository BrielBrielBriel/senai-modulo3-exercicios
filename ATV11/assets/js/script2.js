let mensagemDevSite = document.getElementById("mensagem-dev-site");
let mensagemDevApp = document.getElementById("mensagem-dev-app");
let mensagemSistemas = document.getElementById("mensagem-sistemas");

let botaoDevSite = document.getElementById("botao-dev-site");
let botaoDevApp = document.getElementById("botao-dev-app");
let botaoSistemas = document.getElementById("botao-sistemas");

let servicosResetar = document.getElementById("reset-servicos");

let modoClaroServicos = document.getElementById("modo-claro-servicos");
let modoEscuroServicos = document.getElementById("modo-escuro-servicos");

let corpoServicos = document.getElementById("corpo-servicos");
let servicosArea = document.getElementById("servicos");
let servico1 = document.getElementById("servico-1");
let servico2 = document.getElementById("servico-2");
let servico3 = document.getElementById("servico-3");

botaoDevSite.onclick = function mudarMensagemSite () {
    mensagemDevSite.textContent = "Nosso serviço de desenvolvimento de sites cria soluções personalizadas para cada empresa.";
    
    mensagemDevSite.style.color = "red";
}

botaoDevApp.onclick = function mudarMensagemApp () {
    mensagemDevApp.textContent = "Desenvolvemos aplicativos pensados para facilitar a experiência dos usuários.";

    mensagemDevApp.style.color = "red";
}

botaoSistemas.onclick = function mudarMensagemSistema () {
    mensagemSistemas.textContent = "Nossos sistemas ajudam empresas a organizar seus processos e informações.";

    mensagemSistemas.style.color = "red";
}

servicosResetar.onclick = function resetarServicos () {
    mensagemDevSite.textContent = "";
    mensagemDevApp.textContent = "";
    mensagemSistemas.textContent = "";
}

modoEscuroServicos.onclick = function ativarModoEscuroServicos() {
    corpoServicos.style.backgroundColor = "rgb(54, 54, 54)";
    corpoServicos.style.color = "white";
    
    servico1.style.backgroundColor = "rgb(10, 10, 10)";
    servico2.style.backgroundColor = "rgb(10, 10, 10)";
    servico3.style.backgroundColor = "rgb(10, 10, 10)";

    servico1.style.boxShadow = "0 10px 10px #adadad80";
    servico2.style.boxShadow = "0 10px 10px #adadad80";
    servico3.style.boxShadow = "0 10px 10px #adadad80";

    botaoDevSite.style.background = "rgb(50, 50, 50)";
    botaoDevApp.style.background = "rgb(50, 50, 50)";
    botaoSistemas.style.background = "rgb(50, 50, 50)";
}

modoClaroServicos.onclick = function ativarModoClaroServicos() {
    corpoServicos.style.backgroundColor = "#dadada";
    corpoServicos.style.color = "black";
    
    servico1.style.backgroundColor = "white";
    servico2.style.backgroundColor = "white";
    servico3.style.backgroundColor = "white";

    servico1.style.boxShadow = " 0 20px 20px rgba(0,0,0,0.3)";
    servico2.style.boxShadow = " 0 20px 20px rgba(0,0,0,0.3)";
    servico3.style.boxShadow = " 0 20px 20px rgba(0,0,0,0.3)";
    
    botaoDevSite.style.background = "rgb(0, 0, 0)";
    botaoDevApp.style.background = "rgb(0, 0, 0)";
    botaoSistemas.style.background = "rgb(0, 0, 0)";
}