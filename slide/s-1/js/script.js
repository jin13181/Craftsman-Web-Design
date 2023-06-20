$(document).ready(() => {
  $(".nav > ul > li").mouseover(function () {
    $(".submenu").stop().fadeIn(900);
    $("#header").addClass("on");
  });
  $(".nav > ul > li").mouseout(function () {
    $(".submenu").stop().fadeOut(200);
    $("#header").removeClass("on");
  });

  //슬라이드
  let currentIndex = 0;
  setInterval(() => {
    let nextIndex = (currentIndex + 1) % 3; //1 2 0 1 2 0 무한반복
    //3초에 1번씩 실행
    $(".slider").eq(currentIndex).fadeOut(); //0 1 2 0 1 2
    $(".slider").eq(nextIndex).fadeIn(); //1 2 0 1 2 0

    currentIndex = nextIndex; //무한대로 증가시키니깐 오류발생하더라
  }, 1000);
});
