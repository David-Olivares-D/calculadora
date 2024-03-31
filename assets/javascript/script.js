precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const cantidad = document.querySelector(".cantidad");
const total = document.querySelector(".valor-total");
const sumar = document.querySelector(".sumar");
const restar = document.querySelector(".restar");

sumar.addEventListener("click", () => {
  cantidad.innerHTML = +cantidad.innerHTML + 1
  total.innerHTML = precio * cantidad.innerHTML
})

restar.addEventListener("click", () => {
    if (cantidad.innerHTML > 0) {
    cantidad.innerHTML = +cantidad.innerHTML - 1
    total.innerHTML = precio * cantidad.innerHTML
}
})
