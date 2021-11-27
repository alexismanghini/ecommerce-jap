//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function EditUserData() {
  let htmlEditprofileContentToAppend = `
    
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

  document.getElementById("profileData").innerHTML = htmlEditprofileContentToAppend;
  document.getElementById("ConfirmNewData").addEventListener("click", function (e) {
    e.preventDefault();
    SaveUserData();
    ShowUserData();
  })
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

function ShowUserData() {
  const parsedProfile = (localStorage.UserProfile ? JSON.parse(localStorage.UserProfile) : {})

  let htmlprofileContentToAppend = `
  <p class="col-sm-2">Nombre Completo: ${parsedProfile.nombre ?? ""}</p>
  <p class="col-sm-2">Edad: ${parsedProfile.edad ?? ""}</p>
  <p class="col-sm-2">Email: ${parsedProfile.email ?? ""}</p>
  <p class="col-sm-2">Teléfono: ${parsedProfile.tel ?? ""}</p>
  `

  document.getElementById("profileData").innerHTML = htmlprofileContentToAppend;
}

document.getElementById("ModifyProfile").addEventListener("click", function () {
  EditUserData();
})

document.addEventListener("DOMContentLoaded", function (e) {
  ShowUserData();
});