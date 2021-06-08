//enviar por correo con alert//
const $enviar = document.getElementById("enviar");
$enviar.addEventListener('click', () => {
    alert("El correo fue enviado correctamente");
})


//doble click en titulo y lo cambia a rojo//
let red = document.querySelector('#red');
let red1 = document.querySelector('#red1');
red.addEventListener('dblclick', () => red.style.color = '#ff0b0b')
red1.addEventListener('dblclick', () => red1.style.color = '#ff0b0b')

$(document).ready(function() {
    $("hide").click(function() {
        $("p ").hide();
        $("p").hide();
    });
    $(".show").click(function() {
        $("p").show();
    });
});

// desaparece/aparecel los elementos de las card
//al hacer click en los titulos

$(".card-title").click(function() {

    $(".card-img-top").toggle("slow");

    $("p").toggle("slow");

});
$(".card-title2").click(function() {

    $(".card-img-top2").toggle("slow");

    $("p2").toggle("slow");

});
$(".card-title3").click(function() {

    $(".card-img-top3").toggle("slow");

    $("p3").toggle("slow");

});