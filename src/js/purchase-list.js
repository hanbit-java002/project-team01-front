require([
	"common",
], function() {
	$(".brand>ul>li").on("click", function () {
		$(".brand>ul>li").removeClass("active");
		$(this).addClass("active");

		/* 버튼을 눌렀을때 실행될 상황*/
		console.log($(this).attr("brand-name"));
	});
});
