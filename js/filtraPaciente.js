var formFiltro = document.querySelector("[data-filtro]")
    formFiltro.addEventListener("input", function(){
        var pacientes = document.querySelectorAll("[data-paciente]")
        
        if(this.value.length > 0){
            pacientes.forEach(paciente => {
                var tdNome = paciente.querySelector("[data-nome]")
                var nome = tdNome.textContent
                var expBusca = new RegExp(this.value, "i")
                if (!expBusca.test(nome)) {
                    paciente.classList.add("invisivel")
                }else{
                    paciente.classList.remove("invisivel")
                if (this.value.length = 0){
                    pacientes.classList.remove("invisivel")
                }
                }
                
            })
        }else{
            pacientes.forEach(paciente =>{
                paciente.classList.remove("invisivel")
            })
        }
        
    
    
    
})