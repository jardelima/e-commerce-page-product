export default function quantityProduct() {
    if(document.querySelector(".quantity")) {
        let sub = document.querySelector(".sub");
        let qtd = document.querySelector(".qtd");
        let amount = document.querySelector(".amount");
        let price = document.querySelector(".price-product span");

        let cleanPrice = Number(price.innerHTML.replace(",", "."));
        let cleanQtd = Number(qtd.innerHTML);

        console.log(cleanPrice)

        sub.addEventListener("click", () => {
            if(cleanQtd > 1) {
                cleanQtd--;
                qtd.innerHTML = cleanQtd;
                let result = cleanPrice * cleanQtd;
                price.innerHTML = result.toLocaleString("pt-br", {minimumFractionDigits: 2});
            }
        });

        amount.addEventListener("click", () => {
            cleanQtd++;
            qtd.innerHTML = cleanQtd;
            let result = cleanPrice * cleanQtd;
            price.innerHTML = result.toLocaleString("pt-br", {minimumFractionDigits: 2});
        });
    }
}