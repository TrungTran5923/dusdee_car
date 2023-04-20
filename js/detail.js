$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        $(".navbar").removeClass("active");
    }
});
$(".sub-img img").click(function () {
    $switch = $(this).attr("src");
    $(".main-img img").attr("src", $switch);
});
$(".btn .add ").click(function () {
    $(".cartbox").addClass("active");
    $(".circle").addClass("active");
});
// $(".form button").click(function () {
//     $first = $(".first").val();
//     $last = $(".last").val();
//     $email = $(".email").val();
//     $phone = $(".phone").val();
//     $pass = $(".password").val();
//     $(".popup").addClass("active");
//     $("html, body").animate({ scrollTop: 0 }, 1000);
// });

let registerform = document.querySelector(".register-form");
registerform.addEventListener("submit", (e) => {
    e.preventDefault();
    $(".popup").addClass("active");
    $("html, body").animate({ scrollTop: 0 }, 1000);
});
