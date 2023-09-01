// Tenemos un li de productos
// Definir el arreglo de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

// Obtener elementos del DOM
const inputFiltro = document.getElementById("filtro");
const botonFiltrar = document.getElementById("botonFiltrar");
const listaDeProductos = document.getElementById("lista-de-productos");

// Función para mostrar productos
function mostrarProductos(productosMostrados) {
  // Limpiar la lista de productos
  listaDeProductos.innerHTML = "";

  // Recorrer los productos filtrados y agregarlos al DOM
  productosMostrados.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    const parrafoTitulo = document.createElement("p");
    parrafoTitulo.classList.add("titulo");
    parrafoTitulo.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);

    divProducto.appendChild(parrafoTitulo);
    divProducto.appendChild(imagen);

    listaDeProductos.appendChild(divProducto);
  });
}

// Evento de clic en el botón de filtrar
botonFiltrar.addEventListener("click", function() {
  // Obtener el texto del input
  const textoBuscado = inputFiltro.value.toLowerCase();

  // Filtrar los productos que coincidan con el texto buscado
  const productosFiltrados = productos.filter(producto =>
    producto.tipo.includes(textoBuscado) || producto.color.includes(textoBuscado)
  );

  // Mostrar los productos filtrados
  mostrarProductos(productosFiltrados);
});