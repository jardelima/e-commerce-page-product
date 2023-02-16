export default function addProductCart() {
    if(document.querySelector(".add-product-cart")) {
        let btnAddProductCart = document.querySelector(".add-product-cart");
        let imgProduct = document.querySelector(".images-products .img-product img").getAttribute("src");
        let nameProduct = document.querySelector(".description h2").innerHTML;
        let btnCart = document.querySelectorAll(".icon-cart");
        let qtdProductCart = document.querySelector(".cart-active");
        let modalCart = document.querySelector("[data-modal='modal-cart'] .modal__box");
        let cart = [];

        btnAddProductCart.addEventListener("click", () => {
            let qtdProduct = Number(document.querySelector(".qtd").innerHTML);
            let priceProduct = document.querySelector(".price-product span").innerHTML;

            if(qtdProduct > 0) {
                if(cart.length > 0) {
                    cart.forEach(product => {
                        if(product.nameProduct !== nameProduct) {
                            cart.push({
                                qtdProduct: qtdProduct,
                                nameProduct: nameProduct,
                                priceProduct: priceProduct,
                            });
                        }
                    });
                } else {
                    cart.push({
                        imgProduct: imgProduct,
                        qtdProduct: qtdProduct,
                        nameProduct: nameProduct,
                        priceProduct: priceProduct,
                    });
                }

                btnCart.forEach(btn => {
                    btn.classList.add("active");
                });

                qtdProductCart.innerHTML = cart.length;
            }
        });

        btnCart.forEach(btn => {
            btn.addEventListener("click", () => {
                let productCart = document.createElement("div");

                if(cart.length > 0) {
                    if(document.querySelector(".default-message")) {
                        let defaultMessage = document.querySelector(".default-message");
                        defaultMessage.classList.add("disabled");
                    }

                    cart.map((product) => {
                        return (
                            productCart.innerHTML = `
                                <div class="product-cart">
                                    <div class="product-cart__image">
                                        <img src="${product.imgProduct}" alt="Imagem do produto" />
                                    </div>

                                    <div class="product-cart__description">
                                        <h4>${product.nameProduct}</h4>
                                        <div class="product-cart__qtd"><span>Quantidade:</span> ${product.qtdProduct}</div>
                                        <div class="product-cart__price"><span>Preço:</span> ${product.priceProduct}</div>
                                    </div>
                                </div>
                            `
                        )
                    });
                } else {
                    productCart.innerHTML = `
                        <p class="default-message">Nenhum produto adicionado ao carrinho</p>
                    `
                }

                modalCart.append(productCart)
            })
        })
    }
}