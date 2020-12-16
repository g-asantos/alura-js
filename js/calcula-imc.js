var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;
    console.log(peso);
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    console.log(altura);
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        console.log("Peso Invalido!");
        pesoEhValido = false;
        tdPeso.textContent = "Peso Invalido"
        paciente.classList.add("paciente-invalido")
    }
    
    if(!alturaEhValida){
        console.log("Altura invalida!");
        alturaEhValida = false;
        tdAltura.textContent = "Altura Invalida";
        paciente.classList.add("paciente-invalido")
    }
    
    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso,altura);
    
        tdImc.textContent = imc
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
    
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
    
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    } else{
        return false;
    }
   
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura)
    return imc.toFixed(2);
}
