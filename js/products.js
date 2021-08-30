var CurrentProductsArray = [];

function SortProductsbyPrize(CurrentProductsArray,criteria) {
    if (criteria === a < b){
        
    }
}

function showProductsList(CurrentProductsArray) {

    let htmlContentToAppend = "";
    for (let i = 0; i < CurrentProductsArray.length; i++) {
        let product = CurrentProductsArray[i];



        htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ product.name + `</h4>
                            <small class="text-muted">` + product.soldCount + ` vendidos</small>
                        </div>
                        <p class="mb-1">` + product.cost + product.currency + `</p>
                    </div>
                </div>
            </a>
            `
        
    }
    document.getElementById("products").innerHTML = htmlContentToAppend;


}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (responseProd) {
        if (responseProd.status === "ok") {
            CurrentProductsArray = responseProd.data;

            showProductsList(CurrentProductsArray);
        }

    })
}


);