$(function () {

  // Fixed header
  let header = $("#header");
  let intro = $("#intro");
  // let introH = intro.height();       <----/* Высота элемента без падингов */
  let introH = intro.innerHeight();          /* Высота элемента с падингами */
  let scrollPos = $(window).scrollTop();     /* Позиция скролла от самого верха */
  checkScroll(scrollPos, introH);
  let nav = $("#nav")
  let navToggle = $("#navToggle");

  $(window).on("scroll resize", function () {         /* Выполнение действий при скролле, (load) загрузке изменении размера страницы */
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();                    /* Обновить переменную на текущую позицию скролла */
    checkScroll(scrollPos, introH);

  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {                           /* Если высота скролла больше чем высота introH, то добавляется класс "fixed", если высота нет то класс убирается */
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }


  // Smooth scroll
  $("[data-scroll").on("click", function (event) {              /* Event event.preventDefault - отменяет стандратное поведение ссылки при клике  */
    event.preventDefault();

    let elementID = $(this).data("scroll");                   /* Получить ID блока по которому кликнули */
    let elementOffset = $(elementID).offset().top;            /* Получить отступ от верха страницы  */

    nav.removeClass("show")

    // console.log(elementOffset);

    $("html, body").animate({                                 /* При клике плавно скролит до элемента по которому кликнули */
      scrollTop: elementOffset - 70                           /* - 50px  */
    }, 700);                                                /* Скорость прокрутки где 1000 - 1 секунда */
  });

  // Менюшка

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");

  });

  // SLider
  let slider = $("#reviewsSlider");

  $('#reviewsSlider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });
















  // Что творится в переменной
  // console.log(scrollPos);
});