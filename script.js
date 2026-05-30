let cantidadPedidos = 0;

function sumarPedido() {
    cantidadPedidos = cantidadPedidos + 1;
    document.querySelector("#contador-pedidos").textContent = cantidadPedidos;
}

function limpiarPedidos() {
    cantidadPedidos = 0;
    document.querySelector("#contador-pedidos").textContent = cantidadPedidos;
}

// Al cargar la página, enlazar todos los botones "Pedir" (.pizza button, no las flechas)
const botonesPedir = document.querySelectorAll("#lista-pedidos .pizza button");

botonesPedir.forEach(function (boton) {
    boton.addEventListener("click", sumarPedido);
});

// Abrir y cerrar categorías al hacer clic en la flecha / título
const categorias = document.querySelectorAll(".categoria");

categorias.forEach(function (categoria) {
    const botonCategoria = categoria.querySelector(".categoria-boton");

    botonCategoria.addEventListener("click", function () {
        categoria.classList.toggle("abierta"); // Agrega o quita la clase "abierta"
    });
});

// Al usar el menú de navegación, abrir la categoría correspondiente
const enlacesMenu = document.querySelectorAll(".menu-navegacion a");

enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        const idSeccion = enlace.getAttribute("href").replace("#", "");
        const seccion = document.getElementById(idSeccion);

        if (seccion) {
            seccion.classList.add("abierta");
        }
    });
});