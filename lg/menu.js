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