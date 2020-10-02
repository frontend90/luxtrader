/************    burger  (открыть, закрыть)    *************/
let burger = document.querySelector('.burger');
burger.addEventListener("click", function (e) {
  let burger_menu = document.querySelector('.menu');
  burger_menu.classList.toggle('show');
  burger.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let burger_menu = document.querySelector('.menu');
    burger_menu.classList.remove('show');
    burger.classList.remove('active');
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

/************    user  (открыть, закрыть)    *************/
let user_icon = document.querySelector('.user');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.user-list');
  user_menu.classList.toggle('show');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.user')) {
    let user_menu = document.querySelector('.user-list');
    user_menu.classList.remove('show');
  }
});

/****************  время обратного отчета   ************/
timeend = new Date();
// IE и FF по разному отрабатывают getYear()
timeend = new Date(timeend.getYear() > 1900 ? (timeend.getYear() + 1) : (timeend.getYear() + 1901), 0, 1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
  today = new Date();
  today = Math.floor((timeend - today) / 1000);
  tsec = today % 60;
  today = Math.floor(today / 60);
  if (tsec < 10) tsec = '0' + tsec;
  tmin = today % 60;
  today = Math.floor(today / 60);
  if (tmin < 10) tmin = '0' + tmin;
  thour = today % 24;
  today = Math.floor(today / 24);
  timestr = today + ":" + thour + ":" + tmin + ":" + tsec + "";
  document.getElementById('time1').innerHTML = timestr;
  document.getElementById('time2').innerHTML = timestr;
  document.getElementById('time3').innerHTML = timestr;
  window.setTimeout("time()", 1000);
}