//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function ShowMyProfileTitle() {
  let htmlContentToAppend = `
    <h1 class=text-center>${localStorage.getItem("usuario")}</h1>`

  document.getElementById("profilenametitle").innerHTML = htmlContentToAppend;
}

function EditProfileData() {
  let htmlprofileContentToAppend = `
    
    <form class="text-center p-4">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Nombre Completo:</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="Names">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Edad:</label>
        <div class="col-sm-1">
          <input type="number" class="form-control" id="Age" min="0">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">email:</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="eMail" placeholder="example@gmail.com">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Teléfono:</label>
        <div class="col-sm-2">
          <input type="text" class="form-control" id="Telefono">
        </div>
        </form>
        <div id="ConfirmNewData">
        <button type="button" class="btn btn-outline-success">Confirmar</button>
        </div>`

  document.getElementById("profileData").innerHTML = htmlprofileContentToAppend;
};


document.getElementById("ModifyProfile").addEventListener("click", function(){
 EditProfileData();
})


document.addEventListener("DOMContentLoaded", function (e) {
  ShowMyProfileTitle();
});