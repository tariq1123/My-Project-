if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready() {
    const shopItemBtns = document.querySelectorAll(".shop-item-button");
    if (shopItemBtns.length > 0) {
      shopItemBtns.forEach(function (singleItem) {
        singleItem.addEventListener("click", addToCart);
      });
    }
  }
  
  function addToCart(event) {
    event.preventDefault(); //rukne ko default functionality
    const currentElement = event.target;
    const priceTemp = currentElement.previousElementSibling.innerText;
    const convertedPrice = parseFloat(priceTemp.replace("$", ""));
    const image = currentElement.parentElement.previousElementSibling.src;
    const itemName =
      currentElement.parentElement.previousElementSibling.previousElementSibling
        .innerText;
  
    const cartItem = document.querySelector(".cart-items");
  
    //check if this itemis already exist on this cart
    let isUserHaveThisItem = false;
    const cartRows = document.querySelectorAll(".cart-items .cart-row");
    if (cartRows.length > 0) {
      cartRows.forEach(function (singleCartRow) {
        const prevCartTitle = singleCartRow.querySelector(".cart-item-title").innerText;
        if (prevCartTitle == itemName) {
          // alert("you already have this item in your cart");
  
          const quantityInput = singleCartRow.querySelector( ".cart-quantity-input");
  
          const currentQty = parseInt(quantityInput.value) + 1;
          quantityInput.value = currentQty;
  
          const cartQtyExactPriceTemp = singleCartRow.querySelector(".cart-exact-price");
          const cartQtyExactPrice = parseFloat(cartQtyExactPriceTemp.innerText.replace("$", ""));
  
          singleCartRow.querySelector(".cart-qty-price").innerText = "$ " + (cartQtyExactPrice * currentQty).toFixed(2);
  
          isUserHaveThisItem = true;
        }
      });
    }
  
    // if (!isUserHaveThisItem) { //user ke pas item na ho phle se
    if (isUserHaveThisItem == false) {
      //user ke pas item na ho phle se
      cartItem.innerHTML += `<div class="cart-row">
                        <div class="cart-item cart-column">
                            <img class="cart-item-image" src="${image}" width="100" height="100">
                            <span class="cart-item-title">${itemName}</span>
                        </div>
                        <span class="cart-price cart-exact-price cart-column">$ ${convertedPrice}</span>
                         <span class="cart-price cart-qty-price cart-column">$ ${convertedPrice}</span>
                        <div class="cart-quantity cart-column">
                            <input class="cart-quantity-input" type="number" value="1">
                            <button class="btn btn-danger cart-delete-btn" type="button" >REMOVE</button>
                        </div>
                    </div>`;
    }
  
    bindAllDeleteBtnEvents();
  
    updateCartTotal();
  }
  
  function bindAllDeleteBtnEvents() {
    const removeBtns = document.querySelectorAll(".cart-delete-btn");
    if (removeBtns.length > 0) {
      removeBtns.forEach(function (singleBtn) {
        singleBtn.addEventListener("click", removeBtnHandler);
      });
    }
  }
  
  function removeBtnHandler(event) {
    event.preventDefault();
    if (confirm("Are you sure")) {
      const currentElement = event.target;
      currentElement.parentElement.parentElement.remove();
    }
    updateCartTotal();
  }
  

  function updateCartTotal(){
    const cartRows = document.querySelectorAll(".cart-items .cart-row");
    let total = 0;
    if(cartRows.length > 0){
      cartRows.forEach(function(singleCartRow){
        const qtyPriceTemp = singleCartRow.querySelector('.cart-qty-price');
        const convertedPrice = parseFloat(qtyPriceTemp.innerText.replace("$",""))
        // total += convertedPrice;
        total = total + convertedPrice;
      })
    }
    document.querySelector(".cart-total-price").innerText = "$ " + total.toFixed(2);
  }