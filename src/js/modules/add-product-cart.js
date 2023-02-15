export default function addProductCart() {
    if(document.querySelector(".add-product-cart")) {
        let btnAddProductCart = document.querySelector(".add-product-cart");
        let nameProduct = document.querySelector(".description h2").innerHTML;
        let priceProduct = document.querySelector(".price-product").innerText.split("\n");
        let btnCart = document.querySelectorAll(".icon-cart");
        let qtdProductCart = document.querySelector(".cart-active");
        let cart = [];

        btnAddProductCart.addEventListener("click", () => {
            let qtdProduct = Number(document.querySelector(".qtd").innerHTML);

            if(qtdProduct > 0) {
                if(cart.length > 0) {
                    cart.forEach(product => {
                        if(product.nameProduct !== nameProduct) {
                            cart.push({
                                qtdProduct: qtdProduct,
                                nameProduct: nameProduct,
                                priceProduct: priceProduct[0],
                            });
                        }
                    });
                } else {
                    cart.push({
                        qtdProduct: qtdProduct,
                        nameProduct: nameProduct,
                        priceProduct: priceProduct[0],
                    });
                }

                btnCart.forEach(btn => {
                    btn.classList.add("active");
                });

                qtdProductCart.innerHTML = cart.length;
            }
        });
    }
}