const pacientes = document.querySelectorAll('[data-paciente]');

for (i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i] 

    const tdPeso = paciente.querySelector('[data-peso]');
    const tdAltura = paciente.querySelector('[data-altura]');
    const tdImc = paciente.querySelector('[data-imc]');
    
    const peso = tdPeso.textContent;
    const altura = tdAltura.textContent;
    
    const imc = calculaImc(peso, altura)
    
    var alturaValida = true;
    var pesoValido = true;
    
    if (peso < 0 || peso >300) {
        console.log('peso invalido')
        pesoValido = false
        paciente.classList.add('paciente-invalido')
        tdImc.textContent = "Peso inválido"
    }
    
    if (altura <= 0 || altura >= 3) {
        console.log('altura invalida')
        alturaValida = false
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