const paciente = document.querySelector('[data-primeiro-paciente]');
const tdPeso = paciente.querySelector('[data-peso]');
const tdAltura = paciente.querySelector('[data-altura]');
const tdImc = paciente.querySelector('[data-imc]');

const peso = tdPeso.textContent;
const altura = tdAltura.textContent;

const imc = peso / (altura * altura);

var alturaValida = true;
var pesoValido = true;

if (peso < 0 || peso >300) {
    console.log('peso invalido')
    pesoValido = false
}

if (altura <= 0 || altura >= 3) {
    console.log('altura invalida')
    alturaValida = false
}

if (alturaValida == true && pesoValido == true) {
    tdImc.textContent = imc
}else{
    tdImc.textContent = "Altura ou peso inválidos"
}
