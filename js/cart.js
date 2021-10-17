//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function (e) {

    async function getCartArticles(url) {
        let cartarticles = await getJSONData(url);
        let htmlContentToAppend = "";
        console.log("productos", cartarticles);

        cartarticles.data.articles.forEach((onecartarticle) => {
            let cartproduct = onecartarticle



            htmlContentToAppend += `

            <div class="card" style="width: 18rem;">
               <div class="card-body">
               <h5 class="card-title">${cartproduct.name}</h5>
               <p class="card-text">${cartproduct.currency} ${cartproduct.unitCost} x Unidad</p>
               Cantidad <input type="number" min="1" class="livecount" value="${cartproduct.count}">
               <p class="card-text" id="subtotalprod"> Subtotal Producto($UYU): ${cartproduct.count * cartproduct.unitCost}</p>
               </div>
            </div>
        `
        })
        document.getElementById("CartProducts").innerHTML = htmlContentToAppend;
    }


    getCartArticles(CART_INFO_URL2P);

    document.getElementsByClassName("livecount").addEventListener("change", function () {

        let subtotalproducto = document.getElementById("subtotalprod")
        console.log("subtotal", subtotalproducto)

        subtotalproducto = cartproduct.unitCost * cartproduct.count;
    })
    console.log(livecountproduct);



    document.getElementById("submitcompra").addEventListener("click", function () {
        e.preventDefault();

    })
});