$(function () {

  //메인 슬라이드 영역
  const swiper = new Swiper("#mainSlideWrap .mySwiper", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: "#mainSlideWrap .next",
      prevEl: "#mainSlideWrap .prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 1,
        centeredSlides: true,
      }
    }
  });

  //무한 롤링 정지
  $('#brandWrap .brandList li a').mouseover(function () {
    $(this).parents('.brandList').addClass('pause');
  });

  $('#brandWrap .brandList li a').mouseleave(function () {
    $(this).parents('.brandList').removeClass('pause');
  });

  //올리치어 전당 슬라이드 
  $("#templeWrap .slick").slick({
    autoplay: false,
    arrows: true,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 700,
    speed: 1000,
    prevArrow: $('#templeWrap .controlBox .prev'),
    nextArrow: $('#templeWrap .controlBox .next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });

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
              slidesToScroll: 1
            }
          }
        ]
      });
    });

  }

  initComLists();


});

