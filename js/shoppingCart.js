function numInShoppingCart() {
  const storageCount = JSON.parse(sessionStorage.getItem("ShoppingCart"))
    .length;
  const basket = document.getElementById("shoppingBasket");
  basket.innerHTML = storageCount;
}
numInShoppingCart();
