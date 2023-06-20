$(document).ready(() => {
  $(".nav > ul > li").mouseover(function () {
    $(".submenu").stop().fadeIn(900);
    $("#header").addClass("on");
  });
  $(".nav > ul > li").mouseout(function () {
    $(".submenu").stop().fadeOut(200);
    $("#header").removeClass("on");
  });
});
