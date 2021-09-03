var CurrentProductsArray = [];
var MinProducto = undefined;
var MaxProducto = undefined;

const MasVendidos = (ArrayProductos) => ArrayProductos.sort((a, b) => {
    if (a.soldCount > b.soldCount) {
        return 1;
    }
    else if (a.soldCount < b.soldCount) {
        return -1;
    }
    else {
        return 0;
    }
})



function showProductsList() {

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
document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL).then(function (responseProd) {
        if (responseProd.status === "ok") {
            CurrentProductsArray = responseProd.data;

            showProductsList();
        }

    })
    document.getElementById("LimpiarBtn").addEventListener("click", function () {
        document.getElementById("prodMinPrecio").value = "";
        document.getElementById("prodMaxPrecio").value = "";

        MinProducto = undefined;
        MaxProducto = undefined;

        
    })

    console.log(showProductsList(CurrentProductsArray));

    document.getElementById("FiltrarBtn").addEventListener("click", function () {

        MinProducto = document.getElementById("prodMinPrecio").value;
        MaxProducto = document.getElementById("prodMinPrecio").value;


        if ((MinProducto = undefined) && (MinProducto != "")) {
            MinProducto = parseInt(MinProducto);
        }
        else {
            MinProducto = undefined;
        }

        if ((MaxProducto = undefined) && (MaxProducto != "")) {
            MaxProducto = parseInt(MaxProducto);
        }
        else {
            MaxProducto = undefined;
        }


    })

    document.getElementById("masvendidos").addEventListener("click", function () {
        
        MasVendidos(CurrentProductsArray);
        showProductsList();

    })

}


);