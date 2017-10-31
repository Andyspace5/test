$(function(){
	
	//跳转
	$(".list_impetus").click(function(){
		location.href="impetus.html";
	})
	$(".list_environment").click(function(){
		location.href="environment.html";
	})
	$(".list_it").click(function(){
		location.href="it.html";
	})
	$(".list_analysis").click(function(){
		location.href="analysis.html";
	})
	
	$(".ups_header h1").click(function(){
		$(".ups_header h1 .change").toggle();
	})
	$(".ups_header .change div").click(function(){
		var txt = $(this).text();
		$(".ups_header h1 span").text(txt);
		
	})

	$(".ups_header>.nav>li").click(function(){
		$(this).addClass("li_ck").siblings("li").removeClass("li_ck");
	})
	$(".ups_section_state").hide();
	
	$(".ups_date").click(function(){
		$(".ups_section_date").show().siblings("section").hide();
	})
	$(".ups_state1").click(function(){
		$(".ups_section_state1").show().siblings("section").hide();
	})
	
	$(".ups_state2").click(function(){
		$(".ups_section_state2").show().siblings("section").hide();
	})
})
