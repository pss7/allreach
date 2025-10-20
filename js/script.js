$(function () {

  //이미지 목록 공통 슬라이드
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

  //마이페이지
  $('#headerWrap .accountBox .accountBtn').click(function (e) {
    e.stopPropagation();
    if ($(this).next().hasClass('active')) {
      $('#headerWrap .accountBox .mypageInfoBox').removeClass('active');
    } else {
      $('#headerWrap .accountBox .mypageInfoBox').addClass('active');
    }

  });

  $('#headerWrap .accountBox .mypageInfoBox').click(function (e) {
    e.stopPropagation();
  });

  $('#wrap').click(function (e) {
    if ($(e.target).closest('#headerWrap .accountBox').length) return;
    $('#headerWrap .accountBox .mypageInfoBox').removeClass('active');
  });

  //알림
  $('#headerWrap .alarmBox .box .alarmBtn').click(function (e) {
    e.stopPropagation();
    if ($(this).parents('.alarmBox').find('.alarmContentBox').hasClass('active')) {
      $('.alarmContentBox').removeClass('active');
      $('.alarmContentBox').fadeOut();
    } else {
      $('.alarmContentBox').addClass('active');
      $('.alarmContentBox').fadeIn();
    }
  })

  $('#wrap').click(function () {
    $('.alarmContentBox').removeClass('active');
    $('.alarmContentBox').fadeOut();
  })

});