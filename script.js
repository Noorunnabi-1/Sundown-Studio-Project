const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    let elemC = document.querySelector("#elem-container");
    let fixImg = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function () {
        fixImg.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixImg.style.display = "none";
    });

    let elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let image = e.getAttribute("data-image");
            fixImg.style.backgroundImage = `url(${image})`;
        });
    });
}

/* Swiper JS  */
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
/* Swiper JS  end */

swiperAnimation();
page4Animation();

