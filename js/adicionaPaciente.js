const botao = document.querySelector('[data-form-button]')

botao.addEventListener("click", (evento)=> {
    evento.preventDefault()
    const erroUl = document.querySelector('[data-erro]')
    erroUl.innerHTML = ""

    const form = document.querySelector('[data-form]')

    const paciente = dadosPaciente(form)    

    const formTr = criaTr(paciente)

    const erros = validaPaciente(paciente)

    if (erros.length > 0){
        console.log(erros)
        erros.forEach(erro => {
            const erroUl = document.querySelector('[data-erro]')
            const erroLi = document.createElement('li')
            erroLi.textContent = erro
            erroLi.classList.add("mensagem-erro")
            erroUl.appendChild(erroLi)
        })
        return
    }


    const tabela = document.querySelector('[data-tabela]')
    tabela.appendChild(formTr)
    form.reset()
})

function dadosPaciente(form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function criaTr(paciente) {
    const formTr = document.createElement ('tr')
    formTr.classList.add("paciente")

    const nomeTd = criaTd(paciente.nome, "info-nome")
    const pesoTd = criaTd(paciente.peso, "info-peso")
    const alturaTd = criaTd(paciente.altura, "info-altura")
    const gorduraTd = criaTd(paciente.gordura, "info.gordura")
    const imcTd = criaTd(paciente.imc, "info-imc")

    formTr.appendChild(nomeTd)
    formTr.appendChild(pesoTd)
    formTr.appendChild(alturaTd)
    formTr.appendChild(gorduraTd)
    formTr.appendChild(imcTd)

    return formTr
}

function criaTd(dado, classe) {
    var td = document.createElement ('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente) {
    var erros = []
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido")
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida")
    }
    if(!validaNome(paciente.nome)){
        erros.push("Nome não pode ficar em branco")
    }
    if(!validaGordura(paciente.gordura)){
        erros.push("% de gordura inválida")
    }

    return erros
}