//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function ShowProfileName() {
    document.getElementById("Perfilproducts-info").innerHTML = localStorage.getItem("usuario");
}

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

        htmlContentToAppend = `<h3 class="text-center p-4">Comentarios</h3>
                               <div container-comments>
                               <p><strong>${comment.user}</strong> ${comment.description} </p>
                               <span id="1est" class="fa fa-star"></span>
                               <span id="2est" class="fa fa-star"></span>
                               <span id="3est" class="fa fa-star"></span>
                               <span id="4est" class="fa fa-star"></span>
                               <span id="5est" class="fa fa-star"></span>
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

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (response) {
        if (response.status === "ok") {
            CurrentsCommentsArray = response.data;

            showProductComments(CurrentsCommentsArray);
        }
    })


    document.getElementById("EnviarComentario").addEventListener("click", function () {
        if (document.getElementById("Comentario").value === "") {
            alert("Debes realizar algún comentario para enviar");
        }
        if (document.getElementById("Comentario").value !== "") {
            alert("Su comentario ha sido enviado!");
            document.getElementById("Comentario").value = ""
        }
    })

});