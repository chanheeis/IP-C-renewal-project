$(document).ready(function(){
<<<<<<< HEAD
    //temp 변수

    var toggle=true;
    //Browser 전체의 height를 저장
    var ht=$(window).height();
    $('section').height(ht);
        //GNB 내 Portfolio 메뉴 클릭 시/////////////////////////////////////////////
        $('.menu li').on("click",function(e){
            $('.menu li').removeClass("on");
            $(this).addClass("on");
            
            e.preventDefault();//stop의 개념 event끊어주기
            
            //변수에 브라우저 높이 저장
            var ht=$(window).height();
            //변수 i에 현재 클릭한 li의 순서값을 저장
            var i=$(this).index();
            //브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
            var nowTop=ht*i;
            
            //해당 스크롤 위치값으로 문서를 이동
            $("html,body").stop().animate({"scrollTop":nowTop},1400);
        });
        //GNB 내 Portfolio 메뉴 클릭 시/////////////////////////////////////////////

        //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값읗 갱신/////////// 
        $(window).on("resize",function(){
            var ht=$(window).height();
            $('section').height(ht);
        //window.location.reload();
        });
        //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값읗 갱신///////////

        //Portfolio Section까지 같은 로직으로 돌려서 생기는 문제
        $("section").on("mousewheel",function(event,delta){        
            if(delta>0){ //올렸을때
            //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치저장;
                var prev=$(this).prev().offset().top;
              //문서 전체를 prev에 저장된 위치로 이동
                $("html,body").stop().animate({"scrollTop":prev},1400,"easeOutQuart");
                
            
            }else if(delta<0){//내렸을때
                  //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치저장;
                  var next=$(this).next().offset().top;
                //문서 전체를 prev에 저장된 위치로 이동
                  $("html,body").stop().animate({"scrollTop":next},1400,"easeOutQuart");
            
            }   
        });
=======
    var ht=$(window).height();
    $('section').height(ht);
//클릭시
    $('.menu li').on("click",function(e){
        $('.menu li').removeClass("on");
        $(this).addClass("on");
        
        e.preventDefault();//stop의 개념 event끈어주기
        
        //변수에 브라우저 높이 저장
        var ht=$(window).height();
        //변수 i에 현재 클릭한 li의 순서값을 저장
        var i=$(this).index();
        //브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
        var nowTop=ht*i;
        
        //해당 스크롤 위치값으로 문서를 이동
        $("html,body").stop().animate({"scrollTop":nowTop},1400);
        
        
    });
    //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값읗 갱신 
    $(window).on("resize",function(){
      var ht=$(window).height();
      $('section').height(ht);
      var historyHe = $(".company_history_area").height();
      $(".company_history_area").height(historyHe);
    });

    $("section").on("mousewheel",function(event,delta){
	   
    if(delta>0){ //올렸을때
	   //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치저장;
        var prev=$(this).prev().offset().top;
       //문서 전체를 prev에 저장된 위치로 이동
         $("html,body").stop().animate({"scrollTop":prev},1400,"easeOutQuart");
	}else if(delta<0){//내렸을때
      //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치저장;
        var next=$(this).next().offset().top;
       //문서 전체를 prev에 저장된 위치로 이동
         $("html,body").stop().animate({"scrollTop":next},1400,"easeOutQuart");
	
	}
        
	});
   

>>>>>>> 09b3ea855e1a1dfe5b386c688a5d960e75373af4
});










































