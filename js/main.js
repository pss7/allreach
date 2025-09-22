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



  // $("#mainSlideWrap .slick").slick({
  //   autoplay: false,
  //   arrows: true,
  //   dots: false,
  //   accessibility: false,
  //   draggable: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   zIndex: 1000,
  //   pauseOnHover: false,
  //   autoplaySpeed: 700,
  //   speed: 2000,
  //   centerPadding: '0px',
  //   centerMode: false,
  //   prevArrow: $('#mainSlideWrap .controlBox .prev'),
  //   nextArrow: $('#mainSlideWrap .controlBox .next'),
  // });


});

