$(function () {

  //선택아코디언
  $('.selectBox .selectBtn').click(function () {
    if ($(this).next().hasClass('active')) {
      $('.selectBox .selectBtn').next().removeClass('active');
    } else {
      $('.selectBox .selectBtn').next().removeClass('active');
      $(this).next().addClass('active');
    }
  });


});

