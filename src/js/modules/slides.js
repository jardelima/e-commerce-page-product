export default function slides() {
    const thumbsSwiper = new Swiper(".images-products-thumbs", {
        watchOverflow: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    
    const swiper = new Swiper(".images-products", {
        watchOverflow: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: thumbsSwiper,
        },
    });
}