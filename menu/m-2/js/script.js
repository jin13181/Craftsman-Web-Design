$(document).ready(() => {
  $(".nav > ul> li").mouseover(function () {
    $(".submenu").stop().slideDown();
  });
  $(".nav > ul> li").mouseout(function () {
    $(".submenu").stop().slideUp();
  });
});
