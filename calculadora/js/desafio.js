var inputHorasProjeto = document.querySelector("#horas-projeto");
var inputValorHora = document.querySelector("#valor-hora");
var outputResposta = document.querySelector("#resposta");

function calcular() {
    var valorProjeto = inputValorHora.valueAsNumber * inputHorasProjeto.valueAsNumber;
    outputResposta.textContent = "Resposta: " + valorProjeto.toFixed(2);
}