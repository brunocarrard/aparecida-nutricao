const buscaPaciente = document.querySelector("[data-table-get]")

buscaPaciente.addEventListener("click", function(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    const mensagemErro = document.querySelector("[data-span-erro]")
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            mensagemErro.classList.add("invisivel")
            var pacientes = JSON.parse(xhr.responseText)
            pacientes.forEach(paciente => {
                adicionaPaciente(paciente)
            })
        }else{
            console.log("erro ao carregar")
            
            mensagemErro.classList.remove("invisivel")
        }
        
    })
    xhr.send()
})