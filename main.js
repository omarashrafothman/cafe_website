let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.onscroll = function() {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = function() {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".review-slider .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
    loop: true,
    grabCursor: true,
});