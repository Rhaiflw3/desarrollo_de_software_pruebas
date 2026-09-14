//primer card
document.getElementById("titulo").innerHTML="Cambia el texto de H3"

//segundo card
var nombre="Diego"
var apellido="Florez"

//tercer card
function ver(){
    var nombre="Diego"
    var apellido="Florez"
    document.getElementById("titulo2").innerHTML=nombre + " " + apellido
}

//cuarto card
function ver1(){
    var nombre="Diego"
    var apellido="Florez"
    document.getElementById("titulo3").innerHTML=nombre + " " + apellido
}
document.getElementById("boton3").onclick=function(){ver1()}//funcion implicita

//Quinto card
function suma(){
    var s1=Number(document.getElementById("vs1").value)
    var s2=Number(document.getElementById("vs2").value)
    var RS=s1+s2
    document.getElementById("Rs").innerHTML=RS
    
    Swal.fire({
        title: "Resultados?",
        text: "Exitoso",
        icon: "question"
    });
}
document.getElementById("boton4").onclick=function(){suma()}//funcion implicita