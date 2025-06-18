function calcularIMC() {
    let peso = document.getElementById ('peso');
    let altura= document.getElementById ('altura');
    let resultado= document.getElementById ('resultado');

    let num_altura = parseFloat (altura.value)/100;
    let num_peso = parseFloat (peso.value);
    let imc = num_peso/ num_altura**2;

    resultado.textContent= imc.toFixed (2);
    
}