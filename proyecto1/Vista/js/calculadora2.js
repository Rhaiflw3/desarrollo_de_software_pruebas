// Función para activar la alerta SweetAlert2
function lanzarAlertaExito() {
    Swal.fire({
        title: '¡Buen trabajo!',
        text: 'Su operación se realizó!',
        icon: 'success',
        confirmButtonColor: '#7e57c2',
        confirmButtonText: 'OK'
    });
}

// ====================================================
// 1. FORMAS DE ENVÍO / SALIDA A JAVASCRIPT
// ====================================================
function cambiarTextoInnerHTML() {
    document.getElementById('t1').innerText = "Diego Alonzo Florez Hurtado";
    lanzarAlertaExito();
}

function ejecutarDocumentWrite() {
    lanzarAlertaExito();
    console.log("Salida mediante document.write() realizada");
}

function ejecutarWindowAlert() {
    alert("Procesando mediante window.alert()");
    lanzarAlertaExito();
}

function ejecutarConsoleLog() {
    console.log("Mensaje impreso en la consola de JavaScript.");
    lanzarAlertaExito();
}

// ====================================================
// 2. EJERCICIOS LÓGICOS PROPUESTOS (1 AL 8)
// ====================================================

// Ejercicio 1: El mayor de tres números
function ejercicio1() {
    var n1 = parseFloat(document.getElementById('e1_n1').value);
    var n2 = parseFloat(document.getElementById('e1_n2').value);
    var n3 = parseFloat(document.getElementById('e1_n3').value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById('e1_res').innerText = "Incompleto";
        return;
    }

    var mayor = n1;
    if (n2 > mayor) mayor = n2;
    if (n3 > mayor) mayor = n3;

    document.getElementById('e1_res').innerText = mayor;
    lanzarAlertaExito();
}

// Ejercicio 2: Divisible por 2
function ejercicio2() {
    var n1 = parseInt(document.getElementById('e2_n1').value);
    if (isNaN(n1)) return;

    if (n1 % 2 === 0) {
        document.getElementById('e2_res').innerText = "Es divisible por 2";
    } else {
        document.getElementById('e2_res').innerText = "No es divisible por 2";
    }
    lanzarAlertaExito();
}

// Ejercicio 3: Vocales de una frase
function ejercicio3() {
    var text = document.getElementById('e3_txt').value.toLowerCase();
    var vocales = "";

    for (var i = 0; i < text.length; i++) {
        var car = text.charAt(i);
        if (car === "a" || car === "e" || car === "i" || car === "o" || car === "u") {
            vocales += car + " ";
        }
    }

    document.getElementById('e3_res').innerText = vocales || "Sin vocales";
    lanzarAlertaExito();
}

// Ejercicio 4: Divisible por 2, 3, 5 o 7
function ejercicio4() {
    var n1 = parseInt(document.getElementById('e4_n1').value);
    if (isNaN(n1)) return;

    if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
        document.getElementById('e4_res').innerText = "Es divisible por 2, 3, 5 o 7";
    } else {
        document.getElementById('e4_res').innerText = "No es divisible ni por 2, 3, 5 ni 7";
    }
    lanzarAlertaExito();
}

// Ejercicio 5: Mostrar todos los divisores (2, 3, 5, 7)
function ejercicio5() {
    var n1 = parseInt(document.getElementById('e5_n1').value);
    if (isNaN(n1)) return;

    var resultado = "";
    if (n1 % 2 === 0) resultado += "Divisible por 2. ";
    if (n1 % 3 === 0) resultado += "Divisible por 3. ";
    if (n1 % 5 === 0) resultado += "Divisible por 5. ";
    if (n1 % 7 === 0) resultado += "Divisible por 7. ";

    if (resultado === "") {
        resultado = "No es divisible por ninguno (2,3,5,7)";
    }

    document.getElementById('e5_res').innerText = resultado;
    lanzarAlertaExito();
}

// Ejercicio 6: Divisores de un número
function ejercicio6() {
    var n1 = parseInt(document.getElementById('e6_n1').value);
    if (isNaN(n1)) return;

    var divisores = [];
    for (var i = 1; i <= n1; i++) {
        if (n1 % i === 0) {
            divisores.push(i);
        }
    }

    document.getElementById('e6_res').innerText = divisores.join(", ");
    lanzarAlertaExito();
}

// Ejercicio 7: Divisores comunes entre dos números
function ejercicio7() {
    var n1 = parseInt(document.getElementById('e7_n1').value);
    var n2 = parseInt(document.getElementById('e7_n2').value);
    if (isNaN(n1) || isNaN(n2)) return;

    var menor = n1 < n2 ? n1 : n2;
    var comunes = [];

    for (var i = 1; i <= menor; i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            comunes.push(i);
        }
    }

    document.getElementById('e7_res').innerText = comunes.join(", ");
    lanzarAlertaExito();
}

// Ejercicio 8: Número Primo
function ejercicio8() {
    var n1 = parseInt(document.getElementById('e8_n1').value);
    if (isNaN(n1)) return;

    var esPrimo = true;
    if (n1 <= 1) esPrimo = false;

    for (var i = 2; i <= n1 / 2; i++) {
        if (n1 % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        document.getElementById('e8_res').innerText = "El número es primo";
    } else {
        document.getElementById('e8_res').innerText = "El número NO es primo";
    }
    lanzarAlertaExito();
}