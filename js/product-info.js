//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


function showProductImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
            <div class="d-block mb-6 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        `

        document.getElementById("ProductDescImg").innerHTML = htmlContentToAppend;
    }
}


function showProductComments(ArrayComentarios) {
    let htmlContentToAppend = "";

    for (let i = 0; i < ArrayComentarios.length; i++) {
        let comment = ArrayComentarios[i];

        htmlContentToAppend += `
                               <div container-comments class="text-center p-4">
                               <p><strong>${comment.user}:</strong> ${comment.description} </p>
                               <p>Score: ${comment.score} / 5</p>
                               <p>${comment.dateTime}</p>
                               </div>`


        document.getElementById("Comentarios").innerHTML = htmlContentToAppend;
    }

}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("ProductName");
            let productDescriptionHTML = document.getElementById("ProductDescription");
            let productCostHTML = document.getElementById("ProductCost");
            let productCurrencyHTML = document.getElementById("ProductCurrency");
            let productCategoryHTML = document.getElementById("ProductCategory");
            let productSoldCountHTML = document.getElementById("ProductSoldCount");
            let RelatedproductsHTML = document.getElementById("RelatedProducts");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;

            showProductImagesGallery(product.images);

            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productCategoryHTML.innerHTML = product.category;
            productSoldCountHTML.innerHTML = product.soldCount;
            RelatedproductsHTML.innerHTML = product.relatedProducts;
        }
    })

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (responseComm) {
        if (responseComm.status === "ok") {
            CurrentsCommentsArray = responseComm.data;

            showProductComments(CurrentsCommentsArray);
        }
    })


    document.getElementById("1est").addEventListener("click", function () {
        document.getElementById("1est").setAttribute("class", "fa fa-star checked");
        document.getElementById("2est").setAttribute("class", "fa fa-star");
        document.getElementById("3est").setAttribute("class", "fa fa-star");
        document.getElementById("4est").setAttribute("class", "fa fa-star");
        document.getElementById("5est").setAttribute("class", "fa fa-star");
    }
    )
    document.getElementById("2est").addEventListener("click", function () {
        document.getElementById("1est").setAttribute("class", "fa fa-star checked");
        document.getElementById("2est").setAttribute("class", "fa fa-star checked");
        document.getElementById("3est").setAttribute("class", "fa fa-star");
        document.getElementById("4est").setAttribute("class", "fa fa-star");
        document.getElementById("5est").setAttribute("class", "fa fa-star");
    }
    )
    document.getElementById("3est").addEventListener("click", function () {
        document.getElementById("1est").setAttribute("class", "fa fa-star checked");
        document.getElementById("2est").setAttribute("class", "fa fa-star checked");
        document.getElementById("3est").setAttribute("class", "fa fa-star checked");
        document.getElementById("4est").setAttribute("class", "fa fa-star");
        document.getElementById("5est").setAttribute("class", "fa fa-star");

    }
    )
    document.getElementById("4est").addEventListener("click", function () {
        document.getElementById("1est").setAttribute("class", "fa fa-star checked");
        document.getElementById("2est").setAttribute("class", "fa fa-star checked");
        document.getElementById("3est").setAttribute("class", "fa fa-star checked");
        document.getElementById("4est").setAttribute("class", "fa fa-star checked");
        document.getElementById("5est").setAttribute("class", "fa fa-star");
    }
    )
    document.getElementById("5est").addEventListener("click", function () {
        document.getElementById("1est").setAttribute("class", "fa fa-star checked");
        document.getElementById("2est").setAttribute("class", "fa fa-star checked");
        document.getElementById("3est").setAttribute("class", "fa fa-star checked");
        document.getElementById("4est").setAttribute("class", "fa fa-star checked");
        document.getElementById("5est").setAttribute("class", "fa fa-star checked");
    }
    )

    document.getElementById("EnviarComentario").addEventListener("click", function () {
        if (document.getElementById("Comentario").value === "") {
            alert("Debes realizar algún comentario para enviar");
        }
        if (document.getElementById("Comentario").value !== "") {
            alert("Su comentario ha sido enviado!");
            document.getElementById("Comentario").value = ""
            document.getElementById("1est").setAttribute("class", "fa fa-star");
            document.getElementById("2est").setAttribute("class", "fa fa-star");
            document.getElementById("3est").setAttribute("class", "fa fa-star");
            document.getElementById("4est").setAttribute("class", "fa fa-star");
            document.getElementById("5est").setAttribute("class", "fa fa-star");
        }
    })

    async function getRelatedProducts(url) {
        let datosrelated = await getJSONData(url);
        console.log(datosrelated)
        let htmlContentToAppend ="";


        for (product of product.relatedProducts) {
            let relatedproduct = datosrelated.data[product];
            console.log(datosrelated.data)

            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + relatedproduct.imgSrc + `" alt="" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ relatedproduct.name + `</h4>
                        <small class="text-muted">` + relatedproduct.soldCount + ` vendidos</small>
                    </div>
                    <p class="mb-1">` + relatedproduct.description + `</p>
                    <p class="mb-1">` + relatedproduct.cost + relatedproduct.currency + `</p>
                </div>
            </div>
        </a>
            `
            document.getElementById("RelatedProducts").innerHTML = htmlContentToAppend;

        }
    }
    getRelatedProducts(PRODUCTS_URL);
});