$(function(){
	$(".btn").on("click",function(){
		var btn = $(".btn");
		btn.toggleClass("on");
		if(btn.hasClass("on")){
			btn.html("《");
		}else{
			btn.html("MENU》");
		}
		$(".main").toggleClass("on");
		$(".animated").toggleClass("fadeInRight");
	});
});