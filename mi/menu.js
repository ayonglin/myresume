$(function(){
	$("#menuimg").on("click",OPEN);
	function OPEN(){
		$("#menu").slideDown(300);
		$("#close").on("click",CLOSE);
	}
	function CLOSE(){
		$("#menu").slideUp(300);
		$("#close").off("click");
	}
	$(window).on("resize",CLEARSTYLE);
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("#menu").removeAttr("style");
		}
	}
});

$(document).ready(function(){
	$(window).scroll(function() {
	    if ( $(this).scrollTop() > 0 ){
	        $("#menuwraper").addClass("menuwraperbg");
	        $("#m1").addClass("menucolor");
	    } else {
	       $("#menuwraper").removeClass("menuwraperbg");
	       $("#m1").removeClass("menucolor");
	    }
	});   
});

$(function(){
		$("#top").click(function(){
			jQuery("html,body").animate({
				scrollTop:0
			},800);
		});
		$("#m1").click(function(){
			jQuery("html,body").animate({
				scrollTop:750
			},800);
		});
		$("#m2").click(function(){
			jQuery("html,body").animate({
				scrollTop:1430
			},800);
		});
		$("#m3").click(function(){
			jQuery("html,body").animate({
				scrollTop:2190
			},800);
		});
		$("#m4").click(function(){
			jQuery("html,body").animate({
				scrollTop:2770
			},800);
		});
	});