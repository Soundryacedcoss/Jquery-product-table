var arr = [];
function add() {
  var sku = document.getElementById("product_sku").value;
  var name = document.getElementById("product_name").value;
  var price = document.getElementById("product_price").value;
  var quantity = document.getElementById("product_quantity").value;

  // Here i am creating Object
  var obj = {
    sku1: sku,
    name1: name,
    price1: price,
    quantity1: quantity,
  };
  // validation condition
  if (
    obj.sku1 == "" ||
    obj.name1 == "" ||
    obj.price1 == "" ||
    obj.quantity1 == "" ||
    !isNaN(obj.name1)
  ) {
    validation(obj);
  } else {
    arr.push(obj);
    document.getElementsByClassName("error")[0].style.display = "none";
    document.getElementsByClassName("success")[0].style.display = "block";
    document.getElementById("product_sku").value = "";
    document.getElementById("product_name").value = "";
    document.getElementById("product_price").value = "";
    document.getElementById("product_quantity").value = "";
    display();
  }
}

function display() {
  var table =
    "<table><tr><th>SKU</th><th>Name</th><th>price</th><th>quantity</th><th>Action</th></tr>";

  arr.forEach((element) => {
    table +=
      "<tr><td>" +
      element.sku1 +
      "</td><td>" +
      element.name1 +
      "</td><td>" +
      element.price1 +
      "</td><td>" +
      element.quantity1 +
      "</td><td>" +
      '<a href="#" class="edit" onclick="editing(\'' +
      element.sku1 +
      '\')" >Edit</a><a href="#"class="delete"  onclick="del(\'' +
      element.sku1 +
      "')\">Delete</a>";
    ("</td></tr>");
  });
  table += "</table>";
  document.getElementById("p1").innerHTML = table;
}
// here i have created a function for  delete the data
function del(val1) {
  for (let i = 0; i < arr.length; i++) {
    if (val1 == arr[i].sku1) {
      arr.splice(i, 1);
    }
  }
  display();
}
// here i am making editing function for edit my data
function editing(val1) {
  for (let i = 0; i <= arr.length; i++) {
    if (val1 == arr[i].sku1) {
      document.getElementById("product_sku").value = arr[i].sku1;
      document.getElementById("product_name").value = arr[i].name1;
      document.getElementById("product_price").value = arr[i].price1;
      document.getElementById("product_quantity").value = arr[i].quantity1;
      arr.splice(i, 1);
    }
  }
  display();
}
// here i am hiding the notification by user on click button

$(document).ready(function () {
  $(".success").hide();
  $(".error").hide();
  $(".close").click(function () {
    $(".success").hide();
  });
  $(".close").click(function () {
    $(".error").hide();
  });
});
function validation(obj) {
  if (
    obj.sku1 == "" &&
    obj.name1 == "" &&
    obj.price1 == "" &&
    obj.quantity1 == ""
  ) {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter name and Sku price and quantity :(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.sku1 == "" && obj.name1 == "" && obj.price1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter Sku name and price :( ";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.sku1 == "" && obj.name1 == "" && obj.quantity1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter Sku name and quantity  :(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.price1 == "" && obj.name1 == "" && obj.quantity1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter price name and quantity :(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.sku1 == "" && obj.name1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter Sku and name:(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.sku1 == "" && obj.price1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter Sku and price:(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.sku1 == "" && obj.quantity1 == "") {
    document.getElementsByClassName("error")[0].innerHTML =
      "Please Enter Sku and quantity:(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.price1 == "" && obj.name1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter price and  name :(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.price1 == "" && obj.quantity1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter price and  quantity :(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.name1 == "" && obj.quantity1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter name and  quantity :(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.sku1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter sku:(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.name1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter name:(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (!isNaN(obj.name1)) {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter Right name:(";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.price1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter price: (";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else if (obj.quantity1 == "") {
    document.getElementsByClassName("errormsg")[0].innerHTML =
      "Please Enter quantity: (";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  }
}
