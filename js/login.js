//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

function ingreso() {

    var usuario = document.getElementById("user").value;
    var contrasenast = document.getElementById("pass").value;


    if (usuario.trim() === "" || contrasenast.trim() === "") {
        alert("Deben rellenarse los campos");
    } else {
        localStorage.setItem("usuario", usuario.trim());
        localStorage.setItem("contrasena", contrasenast.trim());

        location.href = "index.html"

    }
}

document.addEventListener("DOMContentLoaded", function (e) {

});