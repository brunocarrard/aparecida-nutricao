const pacientes = document.querySelectorAll('[data-paciente]');

for (i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i] 

    const tdPeso = paciente.querySelector('[data-peso]');
    const tdAltura = paciente.querySelector('[data-altura]');
    const tdImc = paciente.querySelector('[data-imc]');
    
    const peso = tdPeso.textContent;
    const altura = tdAltura.textContent;
    
    const imc = calculaImc(peso, altura)
    
    var alturaValida = validaAltura(altura);
    var pesoValido = validaPeso(peso);
    
    if (!pesoValido) {
        paciente.classList.add('paciente-invalido')
        tdImc.textContent = "Peso inválido"
    }
    
    if (!alturaValida) {
        paciente.classList.add('paciente-invalido')
        tdImc.textContent = "Altura inválida"
    }
    
    if (alturaValida == true && pesoValido == true) {
        tdImc.textContent = imc
    }
}

function calculaImc(peso, altura) {
    const imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function validaAltura(altura) {
    if(altura <= 0 || altura >= 3) {
        return false
    }else{
        return true
    }
}

function validaPeso(peso) {
    if(peso <= 0 || peso >= 300) {
        return false
    }else{
        return true
    }
}

function validaNome(nome){
    if(nome.length > 0){
        return true
    }else{
        return false
    }
}

function validaGordura(gordura) {
    if(gordura <= 0) {
        return false
    }else{
        return true
    }
}