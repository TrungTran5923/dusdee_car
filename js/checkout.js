//Menu-scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        $(".navbar").removeClass("active");
    }
});

let billform = document.querySelector(".bill-form");
billform.addEventListener("submit", (e) => {
    e.preventDefault();
    $(".popup").addClass("active");
    $("html, body").animate({ scrollTop: 0 }, 1000);
});
