const pacientes = document.querySelectorAll('[data-paciente]');

for (i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i] 

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
        tdImc.textContent = imc.toFixed(2)
    }
}

const botao = document.querySelector('[data-form-button]')

botao.addEventListener("click", (evento)=> {
    evento.preventDefault()
    const form = document.querySelector('[data-form]')

    const nome = form.nome.value
    const peso = form.peso.value
    const altura = form.altura.value
    const gordura = form.gordura.value

    const formTr = document.createElement ('tr')

    const nomeTd = document.createElement ('td')
    const pesoTd = document.createElement ('td')
    const alturaTd = document.createElement ('td')
    const gorduraTd = document.createElement ('td')

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    formTr.appendChild(nomeTd)
    formTr.appendChild(pesoTd)
    formTr.appendChild(alturaTd)
    formTr.appendChild(gorduraTd)

    const tabela = document.querySelector('[data-tabela]')
    tabela.appendChild(formTr)
})