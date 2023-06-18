$(function() { //문서 로딩후 스크립트 읽어주세요
    //슬라이드
    $(".slide ul li").hide();
    $(".slide ul li").eq(0).show();

    var t=0;
    function slide() {

        if(t<2) {
            t++;
        } else {
            t=0;
        }
        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(t).fadeIn();
    
    }

    setInterval(slide, 3000)
    
    //탭메뉴
    $("tabmenu li").click(function(){
        $("tabmenu li").removeClass('on');
        $(this).addClass('on');

        var i = $(this).index();
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();

        return false;
    })


    //팝업메뉴
    $(".pp").click(function(){
        $(".popcon").show();
        return false; //링크차단?
    })
    $((".popcon button")).click(function() {
        $(".popcon").hide();
        return false;
    })

    //메뉴
    $(".gnb>ul>li").mouseenter(function(){
        $(".menuBg, .lnb").stop().fadeIn();
    })
    $(".gnb>ul>li").mouseleave(function(){
        $(".menuBg, .lnb").stop().fadeOut();
    })
})