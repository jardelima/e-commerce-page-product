export default function quantityProduct() {
    if(document.querySelector(".quantity")) {
        let sub = document.querySelector(".sub");
        let qtd = document.querySelector(".qtd");
        let amount = document.querySelector(".amount");

        let cleanQtd = Number(qtd.innerHTML);

        sub.addEventListener("click", () => {
            if(cleanQtd >= 0) {
                cleanQtd--;
                qtd.innerHTML = cleanQtd;
            }
        });

        amount.addEventListener("click", () => {
            cleanQtd++;
            qtd.innerHTML = cleanQtd;
        });
    }
}