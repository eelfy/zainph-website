// window.addEventListener('scroll', () => {
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 0);

// });


/* Menu nav toggle */
$("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});