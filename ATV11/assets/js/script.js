let tituloInicio = document.getElementById("titulo-inicio");
let conhecer = document.getElementById("conhecer");
let botaoConhecer = document.getElementById("botao-conhecer");

let inicioResetar = document.getElementById("reset-inicio");

let modoClaroIndex = document.getElementById("modo-claro-index");
let modoEscuroIndex = document.getElementById("modo-escuro-index");

let beneficiosArea = document.getElementById("beneficios");
let corpoIndex = document.getElementById("corpo-index");
let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");

botaoConhecer.onclick = function conhecerEmpresa() {
    conhecer.textContent = "Bem-vindo à TechSolutions! Estamos prontos para transformar sua ideia em realidade.";

    tituloInicio.style.color = "black";

    window.alert("Bem-vindo à TechSolutions! Estamos prontos para transformar sua ideia em realidade.");
}

inicioResetar.onclick = function resetarInicio() {
    conhecer.textContent = "Clique no botão para conhecer nossa empresa."

    tituloInicio.style.color = "white";
}

modoEscuroIndex.onclick = function ativarModoEscuroIndex() {
    corpoIndex.style.backgroundColor = "rgb(54, 54, 54)";
    
    card1.style.backgroundColor = "rgb(10, 10, 10)";
    card2.style.backgroundColor = "rgb(10, 10, 10)";
    card3.style.backgroundColor = "rgb(10, 10, 10)";
    
    beneficiosArea.style.color = "white";
    card1.style.color = "white";
    card2.style.color = "white";
    card3.style.color = "white";

    card1.style.boxShadow = "0 10px 10px #adadad80";
    card2.style.boxShadow = "0 10px 10px #adadad80";
    card3.style.boxShadow = "0 10px 10px #adadad80";
}

modoClaroIndex.onclick = function ativarModoClaroIndex() {
    corpoIndex.style.backgroundColor = "#dadada";
    
    card1.style.backgroundColor = "white";
    card2.style.backgroundColor = "white";
    card3.style.backgroundColor = "white";
    
    beneficiosArea.style.color = "#111827";
    card1.style.color = "#111827";
    card2.style.color = "#111827";
    card3.style.color = "#111827";

    card1.style.boxShadow = "0 10px 10px #3d3b3b80";
    card2.style.boxShadow = "0 10px 10px #3d3b3b80";
    card3.style.boxShadow = "0 10px 10px #3d3b3b80";
}