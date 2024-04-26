// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

const elemCon = document.querySelector(".elem-container");
const fixedImg = document.querySelector(".fixed-img");
const elems = document.querySelectorAll(".elem");

elemCon.addEventListener("mouseenter", ()=>{
    fixedImg.style.display = "block";
})

elemCon.addEventListener("mouseleave", ()=>{
    fixedImg.style.display = "none";
})

elems.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
       let image = e.getAttribute("data-image");
       fixedImg.style.backgroundImage = `url(${image})`;
    })
});

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

swiperAnimation();