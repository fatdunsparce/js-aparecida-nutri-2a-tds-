var titulo = document.querySelector(".titulo")
titulo.textContent = "aparecida nutricionista"

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

var alturaEhValida = true;
var pesoEhValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}



var paciente = document.querySelector("#segundo-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

var alturaEValida = true;
var pesoEValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEValida && pesoEValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}


var paciente = document.querySelector("#terceiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

var alturaValida = true;
var pesoValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

var paciente = document.querySelector("#quarto-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

var alturValida = true;
var pesValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturValida && pesValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}


var paciente = document.querySelector("#quinto-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

var altuValida = true;
var peValido = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    peValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    altuValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (altuValida && peValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}