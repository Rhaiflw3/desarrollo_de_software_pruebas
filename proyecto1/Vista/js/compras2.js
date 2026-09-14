// Estructura de datos ampliada a 3 categorías y 9 productos en total
const datos = {
  methods: {
    find: (id) => datos.items.find((item) => item.id === id),
    remove: (items) => {
      items.forEach((item) => {
        const product = datos.methods.find(item.id);
        product.cantidad -= item.cantidad;
      });
    },
  },
  items: [
    // Categoría: Calzado
    { id: 0, categoria: "Calzado", descripcion: "Zapatillas Deportivas", precio: 250, cantidad: 15, imagen: "img/zapatilla.jpeg" },
    { id: 1, categoria: "Calzado", descripcion: "Zapatos Formales", precio: 180, cantidad: 10, imagen: "img/zapato.jpeg" },
    { id: 2, categoria: "Calzado", descripcion: "Sandalias Playeras", precio: 60, cantidad: 20, imagen: "img/sandalias.jpeg" },

    
    // Categoría: Balones
    { id: 3, categoria: "Balones", descripcion: "Pelota de Fútbol", precio: 120, cantidad: 30, imagen: "img/pelota.jpeg" },
    { id: 4, categoria: "Balones", descripcion: "Pelota de Baloncesto", precio: 140, cantidad: 25, imagen: "img/basquet.jpeg" },
    { id: 5, categoria: "Balones", descripcion: "Pelota de Vóley", precio: 95, cantidad: 18, imagen: "img/voley.jpeg" },

    // Categoría: Ropa
    { id: 6, categoria: "Ropa", descripcion: "Buzos Hue", precio: 300, cantidad: 40, imagen: "img/buzo.jpeg" },
    { id: 7, categoria: "Ropa", descripcion: "Camiseta Deportiva", precio: 85, cantidad: 50, imagen: "img/camiseta.jpeg" },
    { id: 8, categoria: "Ropa", descripcion: "Casaca Impermeable", precio: 220, cantidad: 12, imagen: "img/casaca.jpeg" },
    { id: 9, categoria: "Calzado", descripcion: "abuelo", precio: 1260, cantidad: 20, imagen: "img/abuelo.jpg" },
    { id: 10, categoria: "ropa", descripcion: "lomo saltado", precio: 20, cantidad: 100, imagen: "img/lomosaltado.png"},
    { id: 11, categoria: "ropa", descripcion: " saltado", precio: 20, cantidad: 100, imagen: "img/lomosaltado.png"},
    { id: 12, categoria: "ropa", descripcion: " saltado de pollo", precio: 20, cantidad: 100, imagen: "img/lomosaltado.png"},


    
  ]
};

const carrocompras = {
  items: [],
  methods: {
    add: (id, cantidad) => {
      const cartItem = carrocompras.methods.get(id);
      if (cartItem) {
        if (carrocompras.methods.hasInventory(id, cantidad + cartItem.cantidad)) {
          cartItem.cantidad++;
        } else {
          Swal.fire("Sin Stock", "No hay suficiente inventario disponible", "warning");
        }
      } else {
        carrocompras.items.push({ id, cantidad });
      }
    },
    remove: (id) => {
      const cartItem = carrocompras.methods.get(id);
      if (cartItem.cantidad - 1 > 0) {
        cartItem.cantidad--;
      } else {
        carrocompras.items = carrocompras.items.filter((item) => item.id !== id);
      }
    },
    get: (id) => carrocompras.items.find((item) => item.id === id),
    getTotal: () => {
      return carrocompras.items.reduce((total, item) => {
        const found = datos.methods.find(item.id);
        return total + found.precio * item.cantidad;
      }, 0);
    },
    hasInventory: (id, cantidad) => {
      return datos.methods.find((item) => item.id === id).cantidad - cantidad >= 0;
    },
    purchase: () => {
      const totalCompra = carrocompras.methods.getTotal();
      datos.methods.remove(carrocompras.items);

      // Resumen de existencias en pantalla final
      let resumenStock = "<b>Estado de existencias restantes:</b><br><br>";
      datos.items.forEach(prod => {
        resumenStock += `${prod.descripcion}: <b>${prod.cantidad} unid.</b><br>`;
      });
      resumenStock += `<br><h5>Total pagado: ${numberToCurrency(totalCompra)}</h5>`;

      Swal.fire({
        title: "¡Compra realizada con éxito!",
        html: resumenStock,
        icon: "success"
      });

      carrocompras.items = [];
      renderStore();
      document.querySelector("#shopping-cart-container").classList.add("hide");
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderStore();
});

// Renderizado de la tienda por categorías
function renderStore() {
  const categorias = ["Calzado", "Balones", "Ropa"];
  let html = "";

  categorias.forEach((cat) => {
    html += `<h5 class="header orange-text text-darken-2" style="margin-top: 30px;">Categoría: ${cat}</h5><div class="row">`;
    
    const productosCat = datos.items.filter((item) => item.categoria === cat);
    productosCat.forEach((item) => {
      html += `
        <div class="col s12 m6 l4">
          <div class="card hoverable">
            <div class="card-image white center-align">
              <img src="${item.imagen}" alt="${item.descripcion}" style="height: 160px; object-fit: contain; width: 100%; padding: 10px;">
            </div>
            <div class="card-content">
              <span class="card-title bold">${item.descripcion}</span>
              <p><b>Precio:</b> ${numberToCurrency(item.precio)}</p>
              <p><b>Stock:</b> ${item.cantidad} unidades</p>
            </div>
            <div class="card-action center-align">
              <button class="btn waves-effect waves-light amber darken-3 add" data-id="${item.id}">
                <i class="material-icons left">add_shopping_cart</i>Agregar
              </button>
            </div>
          </div>
        </div>`;
    });
    html += `</div>`;
  });

  document.querySelector("#store-container").innerHTML = html;

  document.querySelectorAll(".add").forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.getAttribute("data-id"));
      const item = datos.methods.find(id);
      if (item && item.cantidad > 0) {
        carrocompras.methods.add(id, 1);
        rendercarrocompras();
      } else {
        Swal.fire("Aviso", "Artículo agotado", "error");
      }
    });
  });
}

// Renderizado del carrito de compras
function rendercarrocompras() {
  const container = document.querySelector("#shopping-cart-container");
  
  const html = carrocompras.items.map((item) => {
    const datosItem = datos.methods.find(item.id);
    return `
      <div class="item-carrito">
        <h6><b>${datosItem.descripcion}</b></h6>
        <p>Cant: ${item.cantidad} | Subtotal: ${numberToCurrency(item.cantidad * datosItem.precio)}</p>
        <button class="btn-small waves-effect waves-light green addOne" data-id="${datosItem.id}">+</button>
        <button class="btn-small waves-effect waves-light red removeOne" data-id="${datosItem.id}">-</button>
        <hr>
      </div>`;
  });

  const closeButton = `<button id="bClose" class="btn-flat right"><i class="material-icons">close</i></button>`;
  const total = carrocompras.methods.getTotal();
  const totalDiv = `<h5>Total: ${numberToCurrency(total)}</h5>`;
  const purchaseButton = carrocompras.items.length > 0
    ? `<button id="bPurchase" class="btn waves-effect waves-light green darken-1 width-100">Terminar Compra</button>`
    : "";

  container.innerHTML = closeButton + "<h5>Carrito</h5>" + html.join("") + totalDiv + purchaseButton;
  container.classList.remove("hide");

  document.querySelectorAll(".addOne").forEach((b) => {
    b.addEventListener("click", () => {
      const id = parseInt(b.getAttribute("data-id"));
      carrocompras.methods.add(id, 1);
      rendercarrocompras();
    });
  });

  document.querySelectorAll(".removeOne").forEach((b) => {
    b.addEventListener("click", () => {
      const id = parseInt(b.getAttribute("data-id"));
      carrocompras.methods.remove(id);
      rendercarrocompras();
    });
  });

  document.querySelector("#bClose").addEventListener("click", () => {
    container.classList.add("hide");
  });

  const bPurchase = document.querySelector("#bPurchase");
  if (bPurchase) {
    bPurchase.addEventListener("click", () => {
      carrocompras.methods.purchase();
    });
  }
}

function numberToCurrency(n) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN"
  }).format(n);
}