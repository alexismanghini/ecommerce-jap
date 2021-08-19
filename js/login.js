//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var ingreso = function (user, pass) {
    if (user.trim() === "" || pass.trim() === "") {
        alert("Deben rellenarse los campos");
    } else {
        localStorage.setItem("usuario", user.trim());
        localStorage.setItem("contraseña", pass.trim());
  
        location.href = "index.html";
    }
  }

document.addEventListener("DOMContentLoaded", function (e) {
    //if (localStorage.getItem("user") === null || localStorage.getItem("pass") === null){
        //location.href = "login.html";
    //}
});