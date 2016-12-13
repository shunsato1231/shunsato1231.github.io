
//ページ内スクロール
$(document).ready(function() {
    $('a[href^="#"]').click(function(event) {

        var id = $(this).attr("href");
        var target = $(id).offset().top;
        $('html, body').animate({scrollTop:target}, 500);
        event.preventDefault();
        return false;
    });
});

/*Header menu*/
$(document).ready(function(){
	$(".Head__Toggle").click(function(){
    	$(".Head__GlobalNavi").slideToggle("");
	}).next().hide();
});

/*Contact*/
$(document).ready(function () {
  hsize = $(".Contact").outerHeight();
  $(".Contact__Space").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(".Contact").outerHeight();
  $(".Contact__Space").css("height", hsize + "px");
});


/*Sideber accorfion*/
$(document).ready(function(){
	$(".Side__SlideToggle").click(function(){
    	$(this).parent().toggleClass("Side__Title--Selected").next().slideToggle();
	}).next().hide();
});

$(window).on('load resize',function(){
	var windowWidth = $(window).width();
	if(windowWidth>888){
		$(".Side__SideWrap").show();
	}

	if(windowWidth<888){
		$("#SideToggle .Side__SideWrap").hide();
	}
});


window.onload=function(){
	// ===================================
	// HTMLChart
	// ===================================
	var data = [
		{
			value: 80,
			color:"#000"
		},
		{
			value : 20,
	        // Draw with background color
			color : "#eee"
		}
	];
	var ctx = document.getElementById("HTMLChart").getContext("2d");
	new Chart(ctx).Doughnut(data,{
		segmentShowStroke : false,
		segmentStrokeColor : "#fff",
		segmentStrokeWidth : 1,
		percentageInnerCutout : 92, // **** Border width
		animation : true,
		animationSteps : 100,
		animationEasing : "easeOutBounce",
		animateRotate : true,
		animateScale : false,
		onAnimationComplete : null
	});

	// ===================================
	// CSSChart
	// ===================================
	var data = [
		{
			value: 75,
			color:"#000"
		},
		{
			value : 25,
	        // Draw with background color
			color : "#eee"
		}
	];
	var ctx = document.getElementById("CSSChart").getContext("2d");
	new Chart(ctx).Doughnut(data,{
		segmentShowStroke : false,
		segmentStrokeColor : "#fff",
		segmentStrokeWidth : 1,
		percentageInnerCutout : 92, // **** Border width
		animation : true,
		animationSteps : 100,
		animationEasing : "easeOutBounce",
		animateRotate : true,
		animateScale : false,
		onAnimationComplete : null
	});

	// ===================================
	// JavascriptChart
	// ===================================
	var data = [
		{
			value: 60,
			color:"#000"
		},
		{
			value : 40,
	        // Draw with background color
			color : "#eee"
		}
	];
	var ctx = document.getElementById("JavascriptChart").getContext("2d");
	new Chart(ctx).Doughnut(data,{
		segmentShowStroke : false,
		segmentStrokeColor : "#fff",
		segmentStrokeWidth : 1,
		percentageInnerCutout : 92, // **** Border width
		animation : true,
		animationSteps : 100,
		animationEasing : "easeOutBounce",
		animateRotate : true,
		animateScale : false,
		onAnimationComplete : null
	});
}
//LoadingBar
$(function(){
    var loadCount = 0,
        imgLength = $("img").size();
    $("img").each(function() {
        var src = $(this).attr("src");
        $("<img>")
            .attr("src", src)
            .load(function() {
                loadCount++;
            });
    });

    var timer = setInterval(function() {
      console.log(loadCount);
        $("#js-loadingBar").css({
            "width": (loadCount / imgLength) * 100 + "%"
        });
    }, 5);
});

//ToTop
$(function() {
    var topBtn = $('#js-toTop');
    //スクロールが100に達したら
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.addClass('Head__ToTop--Hover');
        } else {
            topBtn.removeClass('Head__ToTop--Hover');
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

//logo
 $(function() {
    $(".Top__Logo").fitText(0.5);
    $(".Top__LogoSub__Cat").fitText(2.3);
 });

 //link
 $(document).ready( function () {
   $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
})
