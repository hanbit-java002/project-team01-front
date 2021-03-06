require([
	"common",
], function() {
	$(".btn-login").on("click", function() {
		signIn();
	});

	var ENTER_KEYCODE = 13;
	$(document).on("keydown", function(event) {
		if (event.keyCode === ENTER_KEYCODE) {
			signIn();
		}
	});

	function signIn() {
		var userId = $("#member-email").val();
		var userPw = $("#member-pw").val();

		var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
		if (!userId.match(regExp)) {
			alert("이메일 주소로 입력하세요");
			return;
		}

		$.ajax({
			url: window._ctx.root+"/api/member/signIn",
			method: "POST",
			data: {
			userId: userId,
			userPw: userPw,
		},
		success: function (data) {
			if (data.result == "ok") {
				alert("로그인 되셨습니다.");
				var preURL = document.referrer;

				if(preURL.includes("signup.html")) {
					location.href = window._ctx.root + "/index.html";
				}
				else {
					window.history.back();
				}
			}
			else {
				alert("정상적으로 로그인되지 않았습니다.");
			}
		},
		error: function (jqXHR) {
				alert(jqXHR.responseJSON.message);
			},
		});
	}
});
