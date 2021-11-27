const CATEGORIES_URL = "http://localhost:3000/categories";
const PUBLISH_PRODUCT_URL = "http://localhost:3000/publishproduct";
const CATEGORY_INFO_URL = "http://localhost:3000/categoriesinfo";
const PRODUCTS_URL = "http://localhost:3000/products";
const PRODUCT_INFO_URL = "http://localhost:3000/productsinfo";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3000/productsinfocomm";
const CART_INFO_URL = "http://localhost:3000/cartinfo1";
const CART_BUY_URL = "http://localhost:3000/cartbuy";
const CART_INFO_URL2P = "http://localhost:3000/cartinfo2";

if ((localStorage.getItem("usuario") === null || localStorage.getItem("contrasena") === null) && location.href.indexOf("login.html") == -1) {
  location.href = "login.html";
}

var showSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function () {
  document.getElementById("spinner-wrapper").style.display = "none";
}

function ShowProfileName() {
  const htmlContentToAppend = `
    <div class="container d-flex flex-column flex-md-row justify-content-between">
  <a class="py-2 d-none d-md-inline-block" href="index.html">Inicio</a>
        <a class="py-2 d-none d-md-inline-block" href="categories.html">Categorías</a>
        <a class="py-2 d-none d-md-inline-block" href="products.html">Productos</a>
        <a class="py-2 d-none d-md-inline-block" href="sell.html">Vender</a>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <a href="my-profile.html">${localStorage.getItem("usuario")}</a>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="my-profile.html">Mi Perfil</a>
    <a class="dropdown-item" href="cart.html">Mi Carrito</a>
    <a class="dropdown-item"  name="cerrarsesion" href="#">Cerrar Sesión</a>
    </div>
    </div>
    `

  document.getElementsByTagName("nav")[0].innerHTML = htmlContentToAppend;
}



var getJSONData = function (url) {
  var result = {};
  showSpinner();
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      hideSpinner();
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      hideSpinner();
      return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

  ShowProfileName();

  document.getElementsByName("cerrarsesion")[0].addEventListener("click", function () {
    localStorage.removeItem("usuario");
    localStorage.removeItem("contrasena");

    location.href = "login.html"
  })
});