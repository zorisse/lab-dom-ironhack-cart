function deleteItem(e) {
  console.log(e.target.parentElement);
  console.log(e.target.parentElement.parentElement);
  // var product = e.target.closest(".product");
  var parent = this.parentNode;
  document.getElementById("productList").removeChild(parent);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  var panierTotal = 0;
  var price = document.getElementsByClassName("Cost");
  var quantity = document.getElementsByClassName("quantity");
  var totalPrice = document.getElementsByClassName("TotalPrice");
  var total = document.getElementById("total");
  for (let index = 0; index < price.length; index++) {
    totalPrice[index].innerHTML =
      parseFloat(price[index].innerHTML) * parseInt(quantity[index].value);
    panierTotal +=
      parseFloat(price[index].innerHTML) * parseInt(quantity[index].value);
  }
  total.innerHTML = panierTotal;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {
  var ref = document.getElementById("ref");
  var newName = document.getElementById("newName");
  var newPrice = document.getElementById("newPrice");
  var products = document.getElementById("productList");

  var NewProduct = document.createElement("div");
  NewProduct.innerHTML = ref.innerHTML;
  NewProduct.className = "container";
  NewProduct.querySelector(".Name").innerHTML = newName.value;
  NewProduct.querySelector(".Cost").innerHTML = newPrice.value;
  NewProduct.querySelector(".btn-delete").onclick = deleteItem;

  products.appendChild(NewProduct);
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  ////////////////////////////////////////////

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
