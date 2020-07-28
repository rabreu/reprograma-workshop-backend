var entrada = document.querySelector("#ano");
var saida = document.querySelector("#respostaAno");

function hello() {
    console.log("Olá, mundo!");
}

function cliquei() {
    var ano = entrada.value;
    saida.textContent = "Resposta: " + ano;
}

hello();