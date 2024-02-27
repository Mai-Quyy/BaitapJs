var man = [
    {
        id:1,
        name: "Áo Polo Nam Tay Bo Phối Màu Form Regular",
        code: " 10F23POL035",
        price: "490.000",
        image: "https://routine.vn/media/amasty/amoptmobile/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/a/o/ao-polo-nam-10s23pol018-bright-white-_2__2_1_jpg.webp"
    },
    {
        id:2,
        name: "Áo polo phối bo sườn",
        code: "10S23POL024",
        price: "422.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/a/o/ao-polo-nam-29-10s23pol024-bright-white-_1__1_jpg.webp"
    },
    {
        id:3,
        name: "Quần jeans nam trơn",
        code: "10S23DPA108CR1",
        price: "472.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/q/u/quan-jean-30-10s23dpa108cr1_black_1__2_jpg.webp"
    },
];
var woment = [
    {
        id:1,
        name: "Đầm Nữ Tay Dài Satin Trơn",
        code: "10F23DREW012L",
        price: "2.160.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/d/a/dam-nu-29-10f23drew012l_red_dahlia_1__2_jpg.webp"
    },
    {
        id:2,
        name: "Áo Polo Nữ Lửng Tay Ngắn",
        code: "10F23POLW004",
        price: "422.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/a/o/ao-polo-nu-29-10f23polw004_black_beauty_1__1_jpg.webp"
    },
    {
        id:3,
        name: "Đầm Polo Nữ Tay Ngắn Cổ Gài Nút Trơn",
        code: "10F23DREW010",
        price: "540.000",
        image: "https://routine.vn/media/amasty/webp/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/d/a/dam-nu-13-10f23drew010_black_1__1_jpg.webp"
    },
    
];
function listProducts(){
    for(let i = 0; i <= man.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+man[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }
    
    for(let i = 0; i <= woment.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+woment[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+woment[i].name+'</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}