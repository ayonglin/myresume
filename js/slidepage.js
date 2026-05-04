// JavaScript Document
$(function(){
	var N=screen.width;
	var Y=N/2-408;
	$("#web_box").css({left:Y});
	$("#graa_box").css({left:Y});
	$("#grab_box").css({left:Y});
	$("#grac_box").css({left:Y});
	$("#grad_box").css({left:Y});

	$("#weba").click(function(){
		$("#black").stop().delay(300).animate({top:0},20,"easeOutCubic");
		$("#web_box").slideToggle(300);
	});
	$("#graa").click(function(){
		$("#black").stop().delay(300).animate({top:0},20,"easeOutCubic");
		$("#graa_box").slideToggle(300);
	});
	$("#grab").click(function(){
		$("#black").stop().delay(300).animate({top:0},20,"easeOutCubic");
		$("#grab_box").slideToggle(300);
	});
	$("#grac").click(function(){
		$("#black").stop().delay(300).animate({top:0},20,"easeOutCubic");
		$("#grac_box").slideToggle(300);
	});
	$("#grad").click(function(){
		$("#black").stop().delay(300).animate({top:0},20,"easeOutCubic");
		$("#grad_box").slideToggle(300);
	});
	/*$("#registration").click(function(){
		$("#black").stop().delay(300).animate({top:0},20,"easeOutCubic");
		$("#registration_box").css({display:"block"});
	});*/
	
	$("#exit01").click(function(){
		$("#black").stop().delay(300).animate({top:-1795},20,"easeOutCubic");
		$("#web_box").slideToggle(300);
	});
	
	$("#exit02").click(function(){
		$("#black").stop().delay(300).animate({top:-1795},20,"easeOutCubic");
		$("#graa_box").slideToggle(300);
	});
	$("#exit03").click(function(){
		$("#black").stop().delay(300).animate({top:-1795},20,"easeOutCubic");
		$("#grab_box").slideToggle(300);
	});
	$("#exit04").click(function(){
		$("#black").stop().delay(300).animate({top:-1795},20,"easeOutCubic");
		$("#grac_box").slideToggle(300);
	});
	$("#exit05").click(function(){
		$("#black").stop().delay(300).animate({top:-1795},20,"easeOutCubic");
		$("#grad_box").slideToggle(300);
	});
	/*,function(){
		
		$("#content01").stop(true).animate({left:0},900,"easeOutCubic");
		
	});*/
	/*$("#menu").click(function(){
		$("#menu_bar").stop().delay(300).animate({left:680},20,"easeOutCubic");
		$("#menu_bar").css({display:"block"});
	});*/
});