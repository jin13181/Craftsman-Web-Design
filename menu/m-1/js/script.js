$(document).ready(() => {
  //메뉴에 오버했을때 자식 메뉴를 보여줘라
  $(".nav>ul>li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown();
  });
  $(".nav>ul>li").mouseout(function () {
    $(this).find(".submenu").stop().slideUp();
  });
});
