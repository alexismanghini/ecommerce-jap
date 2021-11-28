var CurrentProductsArray = [];
var MinProducto = undefined;
var MaxProducto = undefined;


const MasVendidos = (ArrayProductos) => ArrayProductos.sort((a, b) => {
    if (a.soldCount < b.soldCount) {
        return 1;
    }
    else if (a.soldCount > b.soldCount) {
        return -1;
    }
    else {
        return 0;
    }
})

const MasCaros = (ArrayProductos) => ArrayProductos.sort((a, b) => {
    if (a.cost < b.cost) {
        return 1;
    }
    else if (a.cost > b.cost) {
        return -1;
    }
    else {
        return 0;
    }
})

const MasBaratos = (ArrayProductos) => ArrayProductos.sort((a, b) => {
    if (a.cost > b.cost) {
        return 1;
    }
    else if (a.cost < b.cost) {
        return -1;
    }
    else {
        return 0;
    }
})


function showProductsList(ArrayProductos) {

    let htmlContentToAppend = "";
    for (let i = 0; i < ArrayProductos.length; i++) {
        let product = ArrayProductos[i];


        htmlContentToAppend += `
        <div class="container">
            <div class="col-md-4">
              <a href="product-info.html" class="card mb-4 shadow-sm custom-card">
                        <img src="` + product.imgSrc + `" alt="` + product.description + `class="card-img-top">
                            <h4>`+ product.name + `</h4>
                            <div class="card-body">
                            <small class="text-muted">` + product.soldCount + ` vendidos</small>
                            <p>` + product.cost + product.currency + `</p>
            </div>
                </a>
            </div>
            `
    }
    document.getElementById("products").innerHTML = htmlContentToAppend;
}

function SearchProducts(){
    
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL).then(function (responseProd) {
        if (responseProd.status === "ok") {
            CurrentProductsArray = responseProd.data;
            console.log(CurrentProductsArray);

            showProductsList(CurrentProductsArray);
        }

    })
    document.getElementById("LimpiarBtn").addEventListener("click", function () {
        document.getElementById("prodMinPrecio").value = "";
        document.getElementById("prodMaxPrecio").value = "";

        MinProducto = undefined;
        MaxProducto = undefined;

        showProductsList(CurrentProductsArray);


    })


    document.getElementById("FiltrarBtn").addEventListener("click", function () {

        MinProducto = document.getElementById("prodMinPrecio").value;
        MaxProducto = document.getElementById("prodMaxPrecio").value;

        let FilterProducts = CurrentProductsArray;

        if (MinProducto !== "") {
            FilterProducts = FilterProducts.filter(product => product.cost >= parseInt(MinProducto));
        }
        if (MaxProducto !== "") {
            FilterProducts = FilterProducts.filter(product => product.cost <= parseInt(MaxProducto))};
        //} else {
            //FilterProducts = FilterProducts.filter(product => (product.cost >= parseInt(MinProducto)) && product.cost <= parseInt(MaxProducto))
        //};


        showProductsList(FilterProducts);


    })


    document.getElementById("masvendidos").addEventListener("click", function () {

        MasVendidos(CurrentProductsArray);
        showProductsList(CurrentProductsArray);

    })

    document.getElementById("CarosaBaratos").addEventListener("click", function () {
        MasCaros(CurrentProductsArray);
        showProductsList(CurrentProductsArray);
    })

    document.getElementById("BaratosaCaros").addEventListener("click", function () {
        MasBaratos(CurrentProductsArray);
        showProductsList(CurrentProductsArray);
    })


});