//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function ShowProfileName() {
    document.getElementById("Perfilproducts-info").innerHTML = localStorage.getItem("usuario");
}


document.addEventListener("DOMContentLoaded", function (e) {


    document.getElementById("EnviarComentario").addEventListener("click", function () {
        if (document.getElementById("Comentario").value === "") {
            alert("Debes realizar algún comentario para enviar");
        }
        if (document.getElementById("Comentario").value !== "") {
            alert("Su comentario ha sido enviado!");
            document.getElementById("Comentario").value = ""
        }
    })

});