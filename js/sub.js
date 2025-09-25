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

  //마이페이지
  $('.mypageBox aside .depth01 li .tabBtn').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next('.depth02').slideUp();
    } else {
      $(this).addClass('active');
      $(this).next('.depth02').slideDown();
    }

  })

  //자주묻는질문
  $('.mypageBox .questionBtn').click(function(){
    $(this).next().toggle();
  });


});

