//Menu-scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        $(".navbar").removeClass("active");
    }
});
function convertNumber(str) {
    return str.replace(/[^0-9]/g, "");
}
$(function () {
    $(".icon").click(function () {
        $type = $(this).attr("type");
        $quantity = $(this).parent().find("input").val();
        $price = $(this).closest(".price").find(".pricecore").text();
        $total = convertNumber($(".sum span").text());
        $sum = convertNumber($(this).closest(".cate").find(".price span").text());
        if ($type == "plus") {
            $quantity++;
        } else if ($type == "minus") {
            if ($quantity > 1) {
                $quantity--;
            }
        } else if ($type == "delete") {
            $total = $total - $sum;
            $(this).closest(".cart-item").fadeOut(500);
        }

        if ($type == "plus" || $type == "minus") {
            $total = $total - $sum;
            $sum = $price * $quantity;
            $total = $total + $sum;
            console.log($total);
        }
        $(this).parent().find("input").val($quantity);
        $(this).closest(".cate").find(".price span").text($sum);
        $(".sum span").text($total);
    });
});
