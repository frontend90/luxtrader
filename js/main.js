/************    burger  (открыть, закрыть)    *************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.menu');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }

  $('.main-menu a').click(function () {
    $('.menu').removeClass('show');
    $('.burger').removeClass('active');
  });
});

/***************   изменение HTML (region)    *************/
$(window).resize(function (event) {
  adaptive_function();
});

function adaptive_header(w, h) {
  var headerMenu = $('.main-menu'); /* куда закинуть блок */
  var headerSocial = $('.region'); /* блок, который закинуть */
  if (w < 751) {
    /* ширина */
    if (!headerSocial.hasClass('done')) {
      headerSocial.addClass('done').appendTo(headerMenu);
    }
  } else {
    if (headerSocial.hasClass('done')) {
      headerSocial.removeClass('done').prependTo($('.user-block')); /* вернуть блок на прежнее место */
    }
  }
}

function adaptive_function() {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();