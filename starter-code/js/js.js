var calculatePriceButton = document.getElementById("calc-prices-button");
var createItemButton = document.getElementById("new-item-create");
var deleteButtons = document.getElementsByClassName("btn-delete");

////////////////////////////////////////////

var price = document.getElementById("Cost");
var quantity = document.getElementById("quantity");
var totalPrice = document.getElementById("TotalPrice");

function getTotalPrice() {
  var total = price.innerHTML * quantity.value;
  totalPrice.innerHTML = total;
}

function deleteItem(e) {}
console.log(deleteButtons);
calculatePriceButton.onclick = getTotalPrice;
deleteButtons.onclick = deleteItem;
