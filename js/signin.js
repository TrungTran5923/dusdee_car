//Menu-scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        $(".navbar").removeClass("active");
    }
});
$(".btn button").click(function () {
    $user = $(".username").val();
    $email = $(".email").val();
    $phone = $(".phone").val();
    $pass = $(".password").val();
    if ($email == 0 || $pass == 0 || $phone == 0 || $user == 0) {
        $(".error h4").text("*Please enter valid information");
    }
});
