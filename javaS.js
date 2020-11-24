// SLIDER
let images = document.querySelectorAll(".slider-container img");
let current = 0;
let timer;

autoSlider();
slider();

function autoSlider() {
    timer = setTimeout(swipeLeft, 7000);
}

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('hide');
    }
    images[current].classList.remove('hide');


}

document.querySelector(".btn-infinity-r").addEventListener('click', () => {

    if (current - 1 == -1) {
        current = images.length - 1;

    } else {
        current--;
    }

    slider();
});

document.querySelector(".btn-infinity-l").onclick = () => {
    if (current + 1 == images.length) {
        current = 0;

    } else {
        current++;
    }

    slider();

};

function swipeLeft() {

    if (current + 1 == images.length) {
        current = 0;
    } else {
        current++;
    }
    slider();
    autoSlider();
}

// FACE GALLERY

$(document).ready(function () {
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
});

// FORM
$(document).ready(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {

            document.querySelector('.ty').classList.remove('show');
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});


/* Smooth scroll */
$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#menu__nav li ").removeClass("active");
    $this.addClass("active");


    $("#btn__up ").removeClass("active");
    $this.addClass("active");


    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
});

// SCROLL BAR

let progress = document.querySelector('#progressbar');
let totalH = document.body.scrollHeight - window.innerHeight;
window.onscroll = () => {
    let progH = (window.pageYOffset / totalH) * 100;
    progress.style.height = progH + "%"; 
}

// Sticky Navigation Bar
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);

});



// NAV burg

$("#nav_toggle").on("click", function (event) {
    event.preventDefault(); 

    $(this).toggleClass("active");
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector(".nav_head").classList.toggle("active");
    document.querySelector("header").classList.toggle("active");
});

// NAV BAR CLOSE IF U CLICK ON STUFF
function close() {
    $(this).removeClass("active");
    document.querySelector(".nav").classList.remove("active");
    document.querySelector(".nav_head").classList.remove("active");
    document.querySelector(".nav-toggle").classList.remove("active");
    document.querySelector("header").classList.remove("active");
}
document.getElementById('gallery_close').addEventListener('click', close);
document.getElementById('form_close').addEventListener('click', close);
document.getElementById('feedback_close').addEventListener('click', close);





// FOOTER

document.querySelector('.phone').addEventListener('click', (ev) => {
    ev.preventDefault();
    if (document.querySelector('.phone_number').innerHTML == '') {
        document.querySelector('.phone_number').innerHTML = 'мой номер телефона: 89154298756';
    } else {
        document.querySelector('.phone_number').innerHTML = '';
    }

});