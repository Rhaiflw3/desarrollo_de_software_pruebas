// --- FUNCIONES DE ENVÍO Y SALUDO ---
function saludarPersona() {
    var nombre = "Diego";
    var apellido = "Florez";
    document.getElementById("envio2_txt").innerHTML = nombre + " " + apellido;
}

document.getElementById("btn_envio3").addEventListener("click", function() {
    document.getElementById("envio3_txt").innerHTML = "Actualizado vía AddEventListener";
});

document.getElementById("btn_envio4").onclick = function() {
    document.getElementById("envio4_txt").innerHTML = "Actualizado vía .onclick implícito";
};


// --- EJERCICIOS PROPUESTOS (1 al 8) ---

// Ejercicio 1: Mayor de tres números
document.getElementById("btn_ej1").onclick = function() {
    var n1 = parseFloat(document.getElementById("e1_n1").value);
    var n2 = parseFloat(document.getElementById("e1_n2").value);
    var n3 = parseFloat(document.getElementById("e1_n3").value);
    var mayor;

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        Swal.fire({ title: "Error", text: "Ingresa los 3 números", icon: "error" });
        return;
    }

    if (n1 > n2 && n1 > n3) {
        mayor = n1;
    } else if (n2 > n3) {
        mayor = n2;
    } else {
        mayor = n3;
    }

    Swal.fire({ title: "Resultado", text: "El número mayor es: " + mayor, icon: "info" });
};

// Ejercicio 2: Divisible por 2
document.getElementById("btn_ej2").onclick = function() {
    var n1 = parseInt(document.getElementById("e2_num").value);
    if (isNaN(n1)) return;

    if (n1 % 2 === 0) {
        Swal.fire({ title: "Divisibilidad", text: "Es divisible por 2", icon: "success" });
    } else {
        Swal.fire({ title: "Divisibilidad", text: "No es divisible por 2", icon: "warning" });
    }
};

// Ejercicio 3: Vocales que aparecen
document.getElementById("btn_ej3").onclick = function() {
    var text = document.getElementById("e3_frase").value.toLowerCase();
    var vocalesEncontradas = [];
    
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if ("aeiou".indexOf(char) !== -1) {
            vocalesEncontradas.push(char);
        }
    }

    Swal.fire({
        title: "Vocales encontradas",
        text: vocalesEncontradas.length > 0 ? vocalesEncontradas.join(", ") : "No se encontraron vocales",
        icon: "info"
    });
};

// Ejercicio 4: Divisible por 2, 3, 5 o 7
document.getElementById("btn_ej4").onclick = function() {
    var n1 = parseInt(document.getElementById("e4_num").value);
    if (isNaN(n1)) return;

    if (n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
        Swal.fire({ title: "Resultado", text: "Es divisible por 2, 3, 5 o 7", icon: "success" });
    } else {
        Swal.fire({ title: "Resultado", text: "No es divisible ni por 2, ni por 3, ni por 5, ni por 7", icon: "error" });
    }
};

// Ejercicio 5: Detalle de divisibilidad
document.getElementById("btn_ej5").onclick = function() {
    var n1 = parseInt(document.getElementById("e5_num").value);
    if (isNaN(n1)) return;

    var msj = "";
    if (n1 % 2 === 0) msj += "Divisible por 2. ";
    if (n1 % 3 === 0) msj += "Divisible por 3. ";
    if (n1 % 5 === 0) msj += "Divisible por 5. ";
    if (n1 % 7 === 0) msj += "Divisible por 7. ";

    if (msj === "") {
        Swal.fire({ title: "Resultado", text: "No es divisible ni por 2, 3, 5 ni 7", icon: "warning" });
    } else {
        Swal.fire({ title: "Resultado", text: msj, icon: "success" });
    }
};

// Ejercicio 6: Divisores de un número
document.getElementById("btn_ej6").onclick = function() {
    var n1 = parseInt(document.getElementById("e6_num").value);
    if (isNaN(n1)) return;

    var divisores = [];
    for (var i = 1; i <= n1; i++) {
        if (n1 % i === 0) {
            divisores.push(i);
        }
    }

    Swal.fire({ title: "Divisores", text: divisores.join(", "), icon: "info" });
};

// Ejercicio 7: Divisores comunes de dos números
document.getElementById("btn_ej7").onclick = function() {
    var n1 = parseInt(document.getElementById("e7_n1").value);
    var n2 = parseInt(document.getElementById("e7_n2").value);
    if (isNaN(n1) || isNaN(n2)) return;

    var menor = n1 < n2 ? n1 : n2;
    var comunes = [];

    for (var i = 1; i <= menor; i++) {
        if (n1 % i === 0 && n2 % i === 0) {
            comunes.push(i);
        }
    }

    Swal.fire({ title: "Divisores Comunes", text: comunes.join(", "), icon: "info" });
};

// Ejercicio 8: Determinar si es Primo
document.getElementById("btn_ej8").onclick = function() {
    var n1 = parseInt(document.getElementById("e8_num").value);
    if (isNaN(n1) || n1 <= 1) {
        Swal.fire({ title: "Evaluación", text: "Ingresa un número mayor a 1", icon: "error" });
        return;
    }

    var esPrimo = true;
    for (var i = 2; i <= n1 / 2; i++) {
        if (n1 % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        Swal.fire({ title: "Resultado", text: "El número es primo", icon: "success" });
    } else {
        Swal.fire({ title: "Resultado", text: "El número NO es primo", icon: "warning" });
    }
};


// --- OPERACIONES ADICIONALES (FILA 4) ---

// Suma Simple
document.getElementById("btn_f4_suma").onclick = function() {
    var v1 = Number(document.getElementById("f4_s1").value);
    var v2 = Number(document.getElementById("f4_s2").value);
    Swal.fire({ title: "Resultado Suma", text: "La suma es: " + (v1 + v2), icon: "success" });
};

// Contador de Texto
document.getElementById("btn_f4_count").onclick = function() {
    var txt = document.getElementById("f4_texto").value;
    Swal.fire({ title: "Longitud", text: "El texto tiene " + txt.length + " caracteres", icon: "info" });
};

// Par / Impar
document.getElementById("btn_f4_par").onclick = function() {
    var num = parseInt(document.getElementById("f4_par").value);
    var res = (num % 2 === 0) ? "Es Par" : "Es Impar";
    Swal.fire({ title: "Evaluación", text: res, icon: "info" });
};

// Tabla de multiplicar simple
document.getElementById("btn_f4_tabla").onclick = function() {
    var base = parseInt(document.getElementById("f4_tabla").value);
    if (isNaN(base)) return;

    var tabla = "";
    for (var i = 1; i <= 5; i++) {
        tabla += base + " x " + i + " = " + (base * i) + "\n";
    }
    Swal.fire({ title: "Tabla (primeros 5)", text: tabla, icon: "info" });
};