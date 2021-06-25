$(document).ready(function() {
    $("hide").click(function() {
        $("p").hide();
    });
    $(".show").click(function() {
        $("p").show();
    });
});

let hide = document.querySelector('hide');
hide.addEventListener('click', () => hide.style.visibility = 'hidden')


$(".img-hide").click(function() {
    $(".img-visible").toggle();
});