const standard = document.getElementById("standardsell");
const gold = document.getElementById("goldsell");
const premium = document.getElementById("premiumsell");

const tarjeta = document.getElementById("creditcard");
const transf = document.getElementById("banktransfer");

function ValidarCarrito(e) {
    e.preventDefault();
    if ((standard.checked || gold.checked || premium.checked) && (tarjeta.checked || transf.checked )){
        alert("Su compra ha sido realizada")
    }
    else {
        alert("Debe rellenar los campos obligatorios")
    }
}



function ReloadCart() {
    const elementoscarrito = [...document.getElementsByClassName("card")]
    let subtotal = 0;
    elementoscarrito.map(elemento => {
        const precioUnitario = parseInt(elemento.getElementsByClassName("unitcost")[0].innerHTML)
        const cantidad = elemento.getElementsByClassName("livecount")[0].value
        const subtotalElemento = precioUnitario * cantidad
        elemento.getElementsByClassName("subtotalprod")[0].innerHTML = subtotalElemento
        subtotal += subtotalElemento;
    })
    document.getElementById("subtotalCarrito").innerHTML = parseInt(subtotal)

}

async function CargarCartArticles(url) {
    let cartarticles = await getJSONData(url);
    let htmlContentToAppend = "";

    cartarticles.data.articles.forEach((onecartarticle) => {
        let cartproduct = onecartarticle

        htmlContentToAppend += `

        <div class="card" style="width: 18rem;">
           <div class="card-body">
           <h5 class="card-title">${cartproduct.name}</h5>
           <p class="card-text">${cartproduct.currency} <number class="unitcost">${cartproduct.unitCost}</number> x Unidad</p>
           Cantidad <input type="number" min="1" class="livecount" value="${cartproduct.count}">
           <p class="card-text"> Subtotal Producto($UYU):<number class="subtotalprod">${cartproduct.count * cartproduct.unitCost}</number></p>
           </div>
        </div>
    `
    })
    document.getElementById("CartProducts").innerHTML = htmlContentToAppend;
    ReloadCart();
}


document.addEventListener("DOMContentLoaded", function (e) {
    CargarCartArticles(CART_INFO_URL2P);
});