
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

function cambiaClase () {
var elemento = document.getElementById ('primero');
if (elemento.className == 'rojo') {
    elemento.className = 'titulo'
}
else{
    elemento.className= 'rojo'
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

function verSeleccion  () {
    var radios = document.getElementsByName('opciones');
    var selec = document.getElementById( 'seleccion');
    for (var opc of radios) {
        console.log ('Valor: ' + opc.value + "Selecc:" + opc.checked);

    if (opc.checked) {
        selec.textContent = "Has seleccionado  " + opc.value;
        break;
    }
    }
 }

 function cambiaColor (actual) {
    var grp = document.getElementById ('grupo')
    
      
         switch (actual) {
                case 1:
                     grp.style.backgroundColor= 'rgb(144, 116, 169)'; 
                     break;
                case 2: 
                 grp.style.backgroundColor='rgb(238, 202, 149)' ; 
                 break;
                case 3: 
                 grp.style.backgroundColor='rgb(172, 202, 236)' ;
                 break;
                case 4: 
                 grp.style.backgroundColor='rgb(203, 229, 164)' ;
                 break;
                 case 5: 
                  grp.style.backgroundColor='rgb(250, 246, 164)' ;
                   break;
          
              default:
                break;
 }
}


function cambiaColor(actual){
    var grp = document.getElementById('grupo')
    limpiaEstilos();
    switch (actual) {
        case 1:
            //grp.style.backgroundColor = '#4f32dd';
            grp.classList.add('uno');
            
            break;
        case 2:
            //grp.style.backgroundColor = '#55efc4';
            grp.classList.add('dos');
            
            break;
        case 3:
            //grp.style.backgroundColor = '#74b9ff';
            grp.classList.add('tres');
            break;            
        case 4:
            //grp.style.backgroundColor = '#fd79a8';
            grp.classList.add('cuatro');
            break;
        case 5:
            //grp.style.backgroundColor = '#a29bfe';
            grp.classList.add('cinco');
            break;            
    
        default:
            break;
    }

}
function limpiaEstilos(){
    var elemento = document.getElementById('grupo');
    var clases = elemento.classList;
    for (var c of clases){
        if (c != 'contenedor'){
            clases.remove(c);
        }
    }
}