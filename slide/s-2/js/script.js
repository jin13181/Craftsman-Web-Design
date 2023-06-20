$(document).ready(() => {
  //슬라이드
  let currentIndex = 0; //현재 이미지
  $(".sliderWrap").append($(".slide").first().clone(true)); //1번이미지 복사해서 맨 뒤에 붙임

  setInterval(() => {
    //1초에 1번씩 실행해라
    currentIndex++;
    $(".sliderWrap").animate({ marginLeft: -currentIndex * 100 + "%" }, 600); //이미지 애니메이션

    if (currentIndex == 3) {
      setTimeout(() => {
        $(".sliderWrap").animate({ marginLeft: 0 }, 0); //애니메이션 정지
        currentIndex = 0; //현재이미지 초기화
      }, 700);
    }
  }, 3000);
});
