//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function EditProfileData() {
  let htmlprofileContentToAppend = `
    
    <form class="text-center p-4" id="ProfileForm">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Nombre Completo:</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="Names">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Edad:</label>
        <div class="col-sm-1">
          <input type="text" class="form-control" id="Age">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Email:</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" id="eMail" placeholder="example@gmail.com">
        </div>
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Teléfono:</label>
        <div class="col-sm-2">
          <input type="text" class="form-control" id="Telefono">
        </div>
        <div>
        <button type="submit" class="btn btn-outline-success" id="ConfirmNewData">Confirmar</button>
        </div>
        </form>`

  document.getElementById("profileData").innerHTML = htmlprofileContentToAppend;
};

function SaveUserData() {
  let usernombres = document.getElementById("Names").value;
  let useredad = document.getElementById("Age").value;
  let useremail = document.getElementById("eMail").value;
  let usertel = document.getElementById("Telefono").value;

  let UserSavedProfile = {
    nombre: usernombres,
    edad: useredad,
    email: useremail,
    tel: usertel
  }

  localStorage.setItem("UserProfile",JSON.stringify(UserSavedProfile));
}


document.getElementById("ModifyProfile").addEventListener("click", function () {
  EditProfileData();
})


document.getElementById("ConfirmNewData").addEventListener("click", function (e) {
  e.preventDefault();
  SaveUserData();
})

document.addEventListener("DOMContentLoaded", function (e) {
});