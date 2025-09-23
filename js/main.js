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

  $(".comList.slick").slick({
    autoplay: false,
    arrows: true,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 700,
    speed: 1000,
    prevArrow: $('#templeWrap .controlBox .prev'),
    nextArrow: $('#templeWrap .controlBox .next'),
  });





});

