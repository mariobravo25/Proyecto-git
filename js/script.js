"use strict"

var veces = 0;
var boton = document.getElementById("boton");
boton.addEventListener(
    "click",
    function (event){
        document.getElementById("resul").innerHTML="Has pulsado el botón "+veces+" veces.";
    },
    false
)