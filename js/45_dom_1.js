
function muestraH1 () {
var h1= document.querySelector ('h1');
console.log (h1);
console.log (h1.textContent);
h1.textContent = 'Hola mundo';
};

function tagName_() {
   var todos_h1 = document.getElementsByTagName ('h1');
   console.log (todos_h1);

   for (var i = 0; i< todos_h1.length;i ++) {
    console.log (todos_h1 [i].textContent); 
   }
}

function verPorID (){
    var primero = document.getElementById ('primero');

    primero.textContent = 'Este título ha sido modificado';
}

function verPorClase () {
    var primero = document.getElementsByClassName ('titulo');
    for (var elem of primero) {
        console.log ('Por clase:' + elem.textContent);
    }
}



// MISMO SELECTOR QUE EN LAS HOJAS DE ESTILO (./#)
function verConQuery () {
    var uno= document.querySelector ('#segundo');
    var dos=document.querySelector ('.titulo');
dos.className = 'rojo';
     console.log ('Por Query:' + uno.textContent);
      console.log ('Por Query:' + dos.textContent);

}