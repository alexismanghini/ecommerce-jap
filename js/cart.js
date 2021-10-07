//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){

    async function getCartProducts(url){
        let articles = await getJSONData(url);
        let htmlContentToAppend = "";

        for (product in product.articles) {
        let cartproduct = articles.data[i];

        htmlContentToAppend =`

            <div class="row">
                <div class="col-3">
                    <img src="${cartproduct.imgSrc}" alt="" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${cartproduct.name}</h4>
                        <small class="text-muted">${cartproduct.count}</small>
                    </div>
                    <p class="mb-1">${cartproduct.unitcost} + ${cartproduct.currency}</p>
                </div>
            </div>
        </a>
        `
        document.getElementById("CartProducts").innerHTML = htmlContentToAppend;
    }
}
getCartProducts(CART_INFO_URL2P);
});