DIAS_DO_MES = 22;

var inputSalario = document.querySelector("#ganho-mes");
var inputHoras = document.querySelector("#horas-dia");
var outputResposta = document.querySelector("#resposta");
var spanHora = document.querySelector(".secao__rodape .secao__rodape__valor span");

function calcularValorHora() {
    var qtdTotalDeHoras = inputHoras.valueAsNumber * DIAS_DO_MES; 
    var valorDeHora = (inputSalario.valueAsNumber / qtdTotalDeHoras)
    .toFixed(2);
    spanHora.textContent = "R$ " + valorDeHora;
    // salario / (22 * horas) 
}