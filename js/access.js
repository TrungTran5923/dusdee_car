//Menu-scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        $(".navbar").removeClass("active");
    }
});
// const container1 = document.querySelector("#page-1");
// const container2 = document.querySelector("#page-2");
// const listcard1 = [
//     {
//         image: "img/product/por/por_1.jpeg",
//         title: "Porsche 911 black",
//         price: "$150,000",
//         tag: "New",
//         year: "2022",
//     },
//     {
//         image: "img/product/por/por_2.webp",
//         title: "Porsche Taycan pink",
//         price: "$148,000",
//         tag: "New",
//         year: "2020",
//     },
//     {
//         image: "img/product/por/por_3.jpeg",
//         title: "Porsche 911 grey",
//         price: "$100,000",
//         tag: "Used",
//         year: "2019",
//     },
//     {
//         image: "img/product/por/por_4.jpeg",
//         title: "Porsche Cayenne SUV velvet",
//         price: "$200,000",
//         tag: "Used",
//         year: "2023",
//     },
//     {
//         image: "img/product/mer/mer_1.webp",
//         title: "Mercedes AMG grey",
//         price: "$190,000",
//         tag: "New",
//         year: "2022",
//     },
//     {
//         image: "img/product/mer/mer_2.webp",
//         title: "Mercedes G63 all-white",
//         price: "$250,000",
//         tag: "New",
//         year: "2022",
//     },
//     {
//         image: "img/product/mer/mer_3.webp",
//         title: "Mercedes GLC navy blue",
//         price: "$245,000",
//         tag: "Used",
//         year: "2021",
//     },
//     {
//         image: "img/product/audi/audi_1.jpeg",
//         title: "Audi A7 red",
//         price: "$170,000",
//         tag: "Used",
//         year: "2021",
//     },
//     {
//         image: "img/product/audi/audi_2.jpeg",
//         title: "Audi A7 grey",
//         price: "$160,000",
//         tag: "Used",
//         year: "2020",
//     },
// ];
// const listcard2 = [
//     {
//         image: "img/product/kia/kia_1.jpeg",
//         title: "Kia K5 atlantic blue",
//         price: "$90,000",
//         tag: "New",
//         year: "2022",
//     },
//     {
//         image: "img/product/kia/kia_2.jpeg",
//         title: "Kia Sportage darkblue",
//         price: "$100,000",
//         tag: "New",
//         year: "2023",
//     },
//     {
//         image: "img/product/kia/kia_3.jpeg",
//         title: "Kia Sorento white",
//         price: "$110,000",
//         tag: "Used",
//         year: "2020",
//     },
//     {
//         image: "img/product/kia/kia_4.jpeg",
//         title: "Kia Carnival tint",
//         price: "$190,000",
//         tag: "New",
//         year: "2023",
//     },
// ];
// function renderCard(listcard, container) {
//     listcard.forEach((element) => {
//         container.innerHTML += ` <div class="col-12 col-lg-4">
//         <div class="card">
//             <div class="card-img">
//                 <img class="card-img-top" src="${element.image}" alt="Card image" />
//                 <div class="card-hover d-flex justify-content-center align-items-center">
//                     <a href="detail.html" ><i class="fa-solid fa-eye" ></i></a>
//                 </div>
//             </div>
//             <div class="card-body">
//                 <h6 class="card-title">${element.title}</h6>
//                 <div class="card-subtitle align-items-center mt-3">
//                     <ul class="d-flex ">
//                         <li><p class="m-0">${element.year}</p></li>
//                         <li><p class="m-0 mt-1">160.000 miles</p></li>
//                         <li><p class="m-0 mt-1">Automatic</p></li>
//                     </ul>
//                     <div class="price">
//                         <h4 class="m-0">${element.price}</h4>
//                     </div>
//                 </div>
//             </div>
//             <div class="tag">
//                 <p class="m-0">${element.tag}</p>
//             </div>
//         </div>
//     </div>`;
//     });
// }
// renderCard(listcard1, container1);
// renderCard(listcard2, container2);
// $(".page .pagination li a").click(function () {
//     $tab = $(this).attr("dataid");
//     $(this).parent().addClass("active");
//     $(this).parent().siblings().removeClass("active");
//     $($tab).parent().addClass("active");
//     $($tab).parent().siblings().removeClass("active");
// });
//Grid
$(".grid i").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $tabgrid = $(this).attr("dataid");
    $($tabgrid).addClass("active");
    $($tabgrid).siblings().removeClass("active");
});
