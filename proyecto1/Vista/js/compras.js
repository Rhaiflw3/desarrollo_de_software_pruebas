//definir clase datos
const datos = {
  methods: {
    find: (id) => {
      return datos.items.find((item) => item.id === id);
    },
    remove: (items) => {
      items.forEach((item) => {
        const product = datos.methods.find(item.id);
        product.cantidad = product.cantidad - item.cantidad;
      });

      console.log(datos);
    },
  },
  items: [
    {
      id: 0,
      descripcion: "Zapatillas",
      precio: 250,
      cantidad: 5,
    },
    {
      id: 1,
      descripcion: "Pelotas",
      precio: 345,
      cantidad: 50,
    },
    {
      id: 2,
      descripcion: "Buzos Hue",
      precio: 1300,
      cantidad: 80,
    },
  ],
};

//definir clase carrocompras
const carrocompras = {
  items: [],
  methods: {
    add: (id, cantidad) => {
      const cartItem = carrocompras.methods.get(id);
      if (cartItem) {
        if (carrocompras.methods.hasInventory(id, cantidad + cartItem.cantidad)) {
          cartItem.cantidad++;
        } else {
          Swal.fire("No hay más inventario");
        }
      } else {
        carrocompras.items.push({ id, cantidad });
      }
    },
    remove: (id, cantidad) => {
      const cartItem = carrocompras.methods.get(id);

      if (cartItem.cantidad - 1 > 0) {
        cartItem.cantidad--;
      } else {
        carrocompras.items = carrocompras.items.filter(
          (item) => item.id !== id
        );
      }
    },
    count: () => {
      return carrocompras.items.reduce((acc, item) => acc + item.qyt, 0);
    },
    get: (id) => {
      const index = carrocompras.items.findIndex((item) => item.id === id);
      return index >= 0 ? carrocompras.items[index] : null;
    },
    getTotal: () => {
      let total = 0;
      carrocompras.items.forEach((item) => {
        const found = datos.methods.find(item.id);
        total += found.precio * item.cantidad;
      });
      return total;
    },
    hasInventory: (id, cantidad) => {
      return datos.items.find((item) => item.id === id).cantidad - cantidad >= 0;
    },
    purchase: () => {
      datos.methods.remove(carrocompras.items);
    },
  },
};
//preszentacion de la pagina
renderStore();

function renderStore() {
  const html = datos.items.map((item) => {
    return `
        <div class="item">
            <div class="descripcion">${item.descripcion}</div>
            <div class="precio">${numberToCurrency(item.precio)}</div>
            <div class="cantidad">${item.cantidad} units</div>
            <div class="actions"><button class="add" data-id="${
              item.id
            }">Add to the shopping cart</button></div>
        </div>`;
  });

  document.querySelector("#store-container").innerHTML = html.join("");

  document.querySelectorAll(".item .actions .add").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(button.getAttribute("data-id"));
      const item = datos.methods.find(id);

      if (item && item.cantidad - 1 > 0) {
        carrocompras.methods.add(id, 1);
        console.log(datos, carrocompras);
        rendercarrocompras();
      } else {
        Swal.fire("Ya no hay existencia de ese artículo");
      }
    });
  });
}

function rendercarrocompras() {
  const html = carrocompras.items.map((item) => {
    const datosItem = datos.methods.find(item.id);
    return `
            <div class="item">
                <div class="descripcion">${datosItem.descripcion}</div>
                <div class="precio">${numberToCurrency(datosItem.precio)}</div>
                <div class="cantidad">${item.cantidad} units</div>
                <div class="subtotal">Subtotal: ${numberToCurrency(
                  item.cantidad * datosItem.precio
                )}</div>
                <div class="actions">
                    <button class="addOne" data-id="${datosItem.id}">+</button>
                    <button class="removeOne" data-id="${datosItem.id}">-</button>
                </div>
            </div>
        `;
  });
  const closeButton = `
  <div class="cart-header">
    <button id="bClose">Close</button>
  </div>`;
  const purchaseButton =
    carrocompras.items.length > 0
      ? `<div class="cart-actions">
    <button id="bPurchase">Terminar compra</button>
  </div>`
      : "";
  const total = carrocompras.methods.getTotal();
  const totalDiv = `<div class="total">Total: ${numberToCurrency(total)}</div>`;
  document.querySelector("#shopping-cart-container").innerHTML =
    closeButton + html.join("") + totalDiv + purchaseButton;

  document.querySelector("#shopping-cart-container").classList.remove("hide");
  document.querySelector("#shopping-cart-container").classList.add("show");

  document.querySelectorAll(".addOne").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(button.getAttribute("data-id"));
      carrocompras.methods.add(id, 1);
      rendercarrocompras();
    });
  });

  document.querySelectorAll(".removeOne").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = parseInt(button.getAttribute("data-id"));
      carrocompras.methods.remove(id, 1);
      rendercarrocompras();
    });
  });

  document.querySelector("#bClose").addEventListener("click", (e) => {
    document.querySelector("#shopping-cart-container").classList.remove("show");
    document.querySelector("#shopping-cart-container").classList.add("hide");
  });
  const bPurchase = document.querySelector("#bPurchase");
  if (bPurchase) {
    bPurchase.addEventListener("click", (e) => {
      carrocompras.methods.purchase();
    });
  }
}

function numberToCurrency(n) {
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 2,
    style: "currency",
    currency: "USD",
  }).format(n);
}