function saludo() {
    document.write ('Prueba');
    
} 


function cuentaVocales (texto) {
     var vocales = 'aeiouAEIOU';
     var contador = 0;

for (var letra of texto) {
    if(vocales.indexOf (letra) >= 0) {
        contador++;
    }
}

return contador; 
}


//Función que reciba un array de números y devuelva el mayor

function maximo (entrada ) {
entrada.sort (function (a,b) {return b-a})
alert (entrada [0]); 
}