$(document).ready(() => {
  //슬라이드
  let currentIndex = 0;
  $(".sliderWrap").append($(".slide").first().clone(true));

  setInterval(() => {
    currentIndex++;

    $(".sliderWrap").animate({ marginTop: -currentIndex * 300 + "px" }, 600);

    if (currentIndex == 3) {
      setTimeout(() => {
        $(".sliderWrap").animate({ marginTop: 0 }, 0);
        currentIndex = 0;
      }, 700);
    }
  }, 3000);
});
