var basic = [
    {
        id:1,
        name: "Phòng 101 ",
        code: " Basic 1",
        price: "500.000",
        image: "https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-19.jpg"
    },
    {
        id:2,
        name: "Phòng 101 ",
        code: "Basic 2",
        price: "500.000",
        image: "https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat.jpg"
    },
    {
        id:3,
        name: "Phòng 101 ",
        code: "Basic 3",
        price: "600.000",
        image: "https://www.hoteljob.vn/files/Anh-HTJ-Hong/mau-tam-trang%20tri-giuong-khach-san-dep-nhat-1.jpg"
    },
];
var vip = [
    {
        id:1,
        name: "Phòng 301 ",
        code: "VIP 1",
        price: "2.500.000",
        image: "https://dyf.vn/wp-content/uploads/2021/11/noi-that-khach-san-5-sao-2.jpg"
    },
    {
        id:2,
        name: "Phòng 302 ",
        code: "VIP 2",
        price: "3.000.000",
        image: "https://dyf.vn/wp-content/uploads/2021/11/noi-that-khach-san-5-sao-1.jpg"
    },
    {
        id:3,
        name: "Phòng 301 ",
        code: "VIP 3",
        price: "3.500.000",
        image: "https://dyf.vn/wp-content/uploads/2021/11/noi-that-khach-san-5-sao-2.jpg"
    },
    
];
function listProducts() {
   
    document.getElementById("basic").innerHTML = "";
    document.getElementById("vip").innerHTML = "";

    
    displayRooms("basic", basic);
    displayRooms("vip", vip);
}


function displayRooms(containerId, rooms) {
    var table = '<table class="table table-bordered">';
    table += '<thead><tr><th>ID</th><th>Name</th><th>Code</th><th>Price</th><th>Image</th><th>Action</th></tr></thead>';
    table += '<tbody>';

    for (let i = 0; i < rooms.length; i++) {
        table += '<tr>';
        table += '<td>' + rooms[i].id + '</td>';
        table += '<td>' + rooms[i].name + '</td>';
        table += '<td>' + rooms[i].code + '</td>';
        table += '<td>' + rooms[i].price + '</td>';
        table += '<td><img src="' + rooms[i].image + '" style="max-height: 50px; max-width: 50px;"></td>';
        table += '<td>';
        table += '<a href="#" class="btn btn-primary" onclick="order()">Order</a>';
        table += '<button class="btn btn-danger" onclick="deleteRoom(\'' + containerId + '\',' + i + ')">Delete</button>';
        table += '</td>';
        table += '</tr>';
    }

    table += '</tbody></table>';
    document.getElementById(containerId).innerHTML = table;
}




function Pic() {
    var fileInput = document.getElementById('imageUpload');
    var preview = document.getElementById('img');

    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

function saveOrUpdate() {
    var code = document.getElementById("code").value;
    var name = document.getElementById("name").value;
    var roomType = document.getElementById("roomtype").value;
    var image = document.getElementById("img").src;
    var price = document.getElementById("new").value;

   
    if (!code || !name || !roomType || !image || !price) {
        alert("Please fill in all fields.");
        return;
    }

    var newRoom = {
        id: basic.length + vip.length + 1, // ID
        name: name,
        code: code,
        price: price,
        image: image,
    };

    if (roomType.toLowerCase() === "basic") {
        basic.push(newRoom);
    } else if (roomType.toLowerCase() === "vip") {
        vip.push(newRoom);
    } else {
        alert("Invalid room type. Please enter 'basic' or 'vip'.");
    }


    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("roomtype").value = "";
    document.getElementById("imageUpload").value = "";
    document.getElementById("img").src = "";
    document.getElementById("new").value = "";

    
    listProducts();
}

function deleteRoom(containerId, index) {
    var confirmation = confirm("Are you sure you want to delete this room?");
    if (confirmation) {
        if (containerId === "basic") {
            basic.splice(index, 1);
        } else if (containerId === "vip") {
            vip.splice(index, 1);
        }
        listProducts(); 
    }
}
