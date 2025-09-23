$(function () {

  function initComLists() {

    $('.comSlideList').each(function () {

      const $wrap = $(this);
      const $slick = $wrap.find('.slick');
      const $prev = $wrap.find('.controlBox .prev');
      const $next = $wrap.find('.controlBox .next');

      if ($slick.hasClass('slick-initialized')) return;

      $slick.slick({

        variableWidth: true,
        autoplay: false,
        arrows: true,
        dots: false,
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 1000,
        pauseOnHover: false,
        autoplaySpeed: 700,
        speed: 1000,

        prevArrow: $prev,
        nextArrow: $next,

        // 반응형
        responsive: [
          {
            breakpoint: 768,
            settings: {
              variableWidth: false,
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 481,
            settings: {
              variableWidth: false,
              slidesToShow: 1,
            }
          }
        ]
      });
    });

  }

  initComLists();


});