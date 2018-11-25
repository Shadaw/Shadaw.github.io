// ativar botao 

$(document).ready(function() {
    $(".header__navbar--bars").on("click", function() {
        $(".header__navbar--menu").toggleClass("--disabled");
    })
})

// scroll 

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('--scroll');
    } else {
        $('nav').removeClass('--scroll');
    }
})

// scroll ao clicar no nav

$('nav a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();
    
    $('html, body').animate({
      scrollTop: targetOffset - menuHeight
    }, 500) 
})

$('.header__text a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();
    
    $('html, body').animate({
      scrollTop: targetOffset - menuHeight
    }, 500) 
})


 