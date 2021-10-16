//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function (e) {

    async function getCartArticles(url) {
        let cartarticles = await getJSONData(url);
        let htmlContentToAppend = "";

        cartarticles.data.articles.forEach((onecartarticle) => {
            let cartproduct = onecartarticle



            htmlContentToAppend += `

            <div class="row">
                <div class="col-3">
                    <img src="${cartproduct.src}" alt="" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${cartproduct.name}</h4>
                        <small class="text-muted">${cartproduct.count}</small>
                    </div>
                    <p class="mb-1">${cartproduct.unitCost} ${cartproduct.currency}</p>
                </div>
            </div>
        </a>
        `
        })
        document.getElementById("CartProducts").innerHTML = htmlContentToAppend;
    }


    getCartArticles(CART_INFO_URL2P);
});