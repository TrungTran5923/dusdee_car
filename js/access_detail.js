//Menu-scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        $(".navbar").removeClass("active");
    }
});
$(".color div").click(function () {
    $tab = $(this).attr("dataid");
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $($tab).addClass("active");
    $($tab).siblings().removeClass("active");
});
$(".sub-img img").click(function () {
    $switch = $(this).attr("src");
    $(".main-img img").attr("src", $switch);
});
$(".btn button ").click(function () {
    $(".popup").addClass("active");
});
