$(document).ready(function () {
  new WOW().init();

  $(".history-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    asNavFor: ".history-nav",
  });

  $(".history-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".history-for",
    dots: false,
    vertical: true,
    centerMode: true,
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: true,
          vertical: false,
          centerMode: true,
        },
      },
    ],
  });

  $(".qa-slide").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".custom-prev",
    nextArrow: ".custom-next",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".article-slide").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".book-slide").slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".video-slide").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".heart-btn").on("click", function () {
    $(this).toggleClass("active");
  });

  $('a[href^="#"]').click(function (event) {
    var id = $(this).attr("href");
    var offset = 60;
    var target = $(id).offset().top - offset;
    $("html, body").animate({ scrollTop: target }, 500);
    event.preventDefault();
  });
});
