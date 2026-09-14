const datosChistes = [
  {
    estudiante: "Gianfranco Maximiliano Quispe Pinto",
    categoria: "Ocurrencias Variadas",
    chistes: [
      { titulo: "Conversación Marina", descripcion: "¿Qué le dice un pez a otro pez? Nada.", imagen: "img/pez.png" },
      { titulo: "Medicina China", descripcion: "Hospital en chino: O chi curo o te mato.", imagen: "img/medicinachina+.jpeg" },
      { titulo: "Discusión con el DJ", descripcion: "¿Por qué nunca debes de discutir con un DJ? Porque siempre cambia de tema.", imagen: "img/dj.jpeg" },
      { titulo: "El Gallo", descripcion: "El colmo del gallo: Que le pongan la piel de gallina.", imagen: "img/gallo.jpeg" }
    ]
  },
  {
    estudiante: "Araoz Tapia Sebastis Joaquin",
    categoria: "Humor Oscuro",
    chistes: [
      { titulo: "Tráiler", descripcion: "Una niña ciega va a ver una película y no pudo verla, ¿por qué? Porque no vio el tráiler.", imagen: "img/trailer.jpeg" },
      { titulo: "Huérfano", descripcion: "¿Qué hace un huérfano en navidad? Esperando al espíritu santo.", imagen: "img/huerfano.jpeg" },
      { titulo: "Código de Barras", descripcion: "15 africanos contra una pared blanca: Código de barras.", imagen: "img/codigodebarras.png" },
      { titulo: "Persona Triste", descripcion: "¿Qué hace saltar a una persona triste? Un puente.", imagen: "img/trsite.jpeg" }
    ]
  },
  {
    estudiante: "Bastian Nefi Quipo Mamani",
    categoria: "Humor Corto y Geek",
    chistes: [
      { titulo: "Saludo de calzado", descripcion: "¿Qué le dice un zapato a otro zapato? Shoes / Salud.", imagen: "img/saludodecalzado.jpeg" },
      { titulo: "Hogar Minion", descripcion: "¿Dónde viven los minions? En los condominios.", imagen: "img/minions.jpeg" },
      { titulo: "Frío de Programador", descripcion: "¿Qué hace un programador cuando hace mucho frío? Cierra el Windows.", imagen: "img/programador.jpeg" }
    ]
  },
  {
    estudiante: "Frank Puma Ucharo",
    categoria: "Colmos y Ocurrencias",
    chistes: [
      { titulo: "Drácula en el Campo", descripcion: "¿Qué hace Drácula con un tractor? Está sembrando el terror.", imagen: "img/dracula.jpeg" },
      { titulo: "Tenedor Sordo", descripcion: "El colmo de un tenedor: Que cuando habla no escucha.", imagen: "img/tenedor+.jpeg" },
      { titulo: "Niño Manzana", descripcion: "A un niño lo llamaban manzana, ¿por qué? Porque lo encontraron colgado de un árbol.", imagen: "img/manzana.jpg" }
    ]
  },
  {
    estudiante: "Quispe Cusihuaman Sebastian Cristian",
    categoria: "Humor Negro y Números",
    chistes: [
      { titulo: "Ceros", descripcion: "¿Qué le dice un cero a otro cero? No somos nada.", imagen: "img/cero.png" },
      { titulo: "Cadenas", descripcion: "Diferencia entre negro y bicicleta: Que la bicicleta no llora cuando le pones cadenas.", imagen: "img/cadena.jpeg" },
      { titulo: "El Abuelo", descripcion: "Mi abuelo falleció durmiendo como él quería, pero no fue bonito para los pasajeros del bus.", imagen: "img/abuelo.jpeg" }
    ]
  },
  {
    estudiante: "Pereyra Rumaja Armando",
    categoria: "Humor Crudo",
    chistes: [
      { titulo: "Árbol y Cura", descripcion: "¿En qué se parece un cura a un árbol de navidad? En que los dos tienen bolas de adorno.", imagen: "img/curaoarbol.jpeg" },
      { titulo: "¿Dónde está Juanito?", descripcion: "¿Dónde está Juanito tras pisar una mina? En todas partes.", imagen: "img/juanito.jpeg" },
      { titulo: "Crucero", descripcion: "¿Por qué no se ven tantas personas negras en un crucero? Porque no van a caer dos veces.", imagen: "img/crucero.jpeg" }
    ]
  },
  {
    estudiante: "Sullca Caballero Jean Pol",
    categoria: "Humor Absurdo y Negro",
    chistes: [
      { titulo: "Perro Herramienta", descripcion: "¿Qué hace un perro con un taladro? Ta-ladrando.", imagen: "img/perro.jpeg" },
      { titulo: "Pizza vs Judío", descripcion: "¿Pizza y judío? La pizza no se queja cuando la metes al horno.", imagen: "img/pizza.jpeg" }
    ]
  },
  {
    estudiante: "Edmundo Yabar Yepez",
    categoria: "Breves Ocurrencias",
    chistes: [
      { titulo: "Traducción", descripcion: "Prostituta en chino: Chincanchon.", imagen: "img/traduccion.jpeg" },
      { titulo: "Noches en África", descripcion: "¿Cuál es la mayor cantidad de desaparecidos en África? En las noches.", imagen: "img/africa.jpeg" }
    ]
  },
  {
    estudiante: "Thiago Valentino Molero Zegarra",
    categoria: "Chistes Clásicos",
    chistes: [
      { titulo: "¿Cura o Árbol?", descripcion: "¿En qué se parece un cura a un árbol de navidad? En que los dos tienen bolas de adorno.", imagen: "img/arbol.jpeg" }
    ]
  },
  {
    estudiante: "Chino Hilares Shanne Alison",
    categoria: "Chistes Relámpago",
    chistes: [
      { titulo: "Fenómeno Africano", descripcion: "¿Qué hace un tornado en África? Chocolatada.", imagen: "img/africano.jpeg" }
    ]
  }
];

function iniciarApp() {
  renderizarEstadisticas();
  renderizarChistes();
}

function renderizarEstadisticas() {
  const totalChistes = datosChistes.reduce((acc, est) => acc + est.chistes.length, 0);

  const elemTotal = document.querySelector("#resumen-total");
  if (elemTotal) {
    elemTotal.innerHTML = `<span style="font-size: 1.1rem; color: #424242;">Total de chistes compartidos por el salón: <b style="color: #1976d2;">${totalChistes}</b></span>`;
  }

  const rankingEstudiantes = [...datosChistes].sort((a, b) => b.chistes.length - a.chistes.length);

  let htmlEstudiantes = "";
  rankingEstudiantes.forEach((est, index) => {
    htmlEstudiantes += `
      <div class="col s12 m6 l4">
        <div class="chip white z-depth-1" style="width: 100%;">
          <i class="material-icons left blue-text text-darken-2">emoji_events</i>
          <b>#${index + 1} ${est.estudiante.split(" ")[0]}</b>: ${est.chistes.length} chiste(s)
        </div>
      </div>`;
  });

  const elemEstudiantes = document.querySelector("#resumen-estudiantes");
  if (elemEstudiantes) {
    elemEstudiantes.innerHTML = htmlEstudiantes;
  }
}

function renderizarChistes() {
  const contenedor = document.querySelector("#contenedor-estudiantes");
  if (!contenedor) return;

  const datosOrdenados = [...datosChistes].sort((a, b) => b.chistes.length - a.chistes.length);

  let html = "";

  datosOrdenados.forEach((grupo, index) => {
    html += `
      <div class="section">
        <h5 class="header blue-text text-darken-3 bold" style="margin-top: 25px; font-weight: bold;">
          Ranking #${index + 1}: ${grupo.estudiante} 
          <span class="grey-text text-darken-1" style="font-size: 0.9rem; font-weight: normal;">
            (${grupo.chistes.length} chiste${grupo.chistes.length > 1 ? 's' : ''} - Categoría: ${grupo.categoria})
          </span>
        </h5>
        <div class="row">
    `;

    grupo.chistes.forEach((chiste) => {
      // Escapar comillas para no romper el evento onclick en HTML
      const tituloEscapado = chiste.titulo.replace(/'/g, "\\'");
      const descripcionEscapada = chiste.descripcion.replace(/'/g, "\\'");
      const estudianteEscapado = grupo.estudiante.replace(/'/g, "\\'");
      const categoriaEscapada = grupo.categoria.replace(/'/g, "\\'");

      html += `
        <div class="col s12 m4">
          <div class="card white z-depth-1 hoverable chiste-card">
            <div class="card-image center-align" style="padding-top: 15px; height: 130px; display: flex; align-items: center; justify-content: center;">
              <img src="${chiste.imagen}" alt="${chiste.titulo}" class="img-chiste">
            </div>
            <div class="card-content" style="flex-grow: 1;">
              <span class="card-title bold text-darken-4" style="font-size: 1.1rem; min-height: 40px; display: flex; align-items: center; font-weight: bold;">${chiste.titulo}</span>
            </div>
            <div class="card-action center-align">
              <button onclick="verChiste('${tituloEscapado}', '${descripcionEscapada}', '${estudianteEscapado}', '${categoriaEscapada}')" class="btn btn-azul waves-effect waves-light" style="width: 100%; display: inline-flex; align-items: center; justify-content: center;">
                <i class="material-icons" style="margin-right: 8px;">sentiment_very_satisfied</i> VER CHISTE
              </button>
            </div>
          </div>
        </div>`;
    });

    html += `
        </div>
      </div>`;
  });

  contenedor.innerHTML = html;
}

// FUNCIÓN PARA MOSTRAR LA VENTANA EMERGENTE
function verChiste(titulo, descripcion, estudiante, categoria) {
  Swal.fire({
    title: `<span style="color: #2e7d32; font-weight: bold; font-size: 1.6rem;">${titulo}</span>`,
    icon: 'success',
    iconColor: '#25d366',
    html: `
      <div style="text-align: center; font-family: sans-serif; color: #424242;">
        <p style="font-weight: 600; margin-bottom: 8px; color: #616161; font-size: 0.95rem;">
          Categoría: <span style="color: #1976d2;">${categoria}</span>
        </p>
        <p style="font-size: 1.15rem; margin: 18px 0; padding: 14px; background-color: #f5f5f5; border-radius: 8px; border-left: 4px solid #1976d2; line-height: 1.5;">
          "${descripcion}"
        </p>
        <p style="font-size: 0.85rem; color: #757575; margin-top: 12px;">
          Compartido por: <b>${estudiante}</b>
        </p>
      </div>
    `,
    confirmButtonText: 'OK',
    customClass: {
      confirmButton: 'btn-azul'
    },
    buttonsStyling: false
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarApp);
} else {
  iniciarApp();
}