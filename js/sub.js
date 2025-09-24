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

  //선택아코디언
  $('.customSelectBox .btn').click(function () {
    if ($(this).next().hasClass('active')) {
      $('.customSelectBox .btn').next().removeClass('active');
    } else {
      $('.customSelectBox .btn').next().removeClass('active');
      $(this).next().addClass('active');
    }
  });


});

