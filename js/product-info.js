//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function ShowProfileName() {
    document.getElementById("Perfilproducts-info").innerHTML = localStorage.getItem("usuario");
}


document.addEventListener("DOMContentLoaded", function(e){

});