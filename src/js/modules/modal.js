export default function modal() {
    if(document.querySelector(".active-modal")) {
        let openModals = document.querySelectorAll(".active-modal");
        let modals = document.querySelectorAll(".modal");
        let closeModals = document.querySelectorAll(".modal__content");

        openModals.forEach(buttonModal => {
            buttonModal.addEventListener("click", (e) => {
                let currentModal = e.target.parentNode.dataset.buttonModal;

                modals.forEach(modal => {
                    if(modal.dataset.modal === currentModal) {
                        modal.classList.add("active");
                    }
                });
            });
        });

        closeModals.forEach(closeModal => {
            closeModal.addEventListener("click", (e) => {
                let currentModal = e.target.parentNode.dataset.modal;

                modals.forEach(modal => {
                    if(modal.dataset.modal === currentModal) {
                        modal.classList.remove("active");
                    }
                });
            });
        });
    }
}