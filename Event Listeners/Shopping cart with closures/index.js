const products = document.querySelectorAll(".product");
const cartElement = document.querySelector(".cart .cart-items");
const cart = {};

products.forEach((product) => {
  const add = addProductToCart(product.getAttribute("data-id"));
  product.children[1].addEventListener("click", () => {
    add();
    updateCart();
    console.log(cart);
  });
});

function addProductToCart(productId) {
  return function () {
    if (cart[productId]) {
      return (cart[productId].quantity += 1);
    } else {
      cart[productId] = {
        quantity: 0,
      };
      return (cart[productId].quantity = 1);
    }
  };
}

function updateCart() {
  const products = Object.entries(cart);
  cartElement.innerHTML = "";

  products.forEach((product) => {
    const cartProductDiv = document.createElement("div");
    cartProductDiv.classList.add("cart-item");
    const h3 = document.createElement("h3");
    h3.setAttribute("id", product[0]);
    h3.textContent = `product id: ${product[0]} quantity: ${product[1].quantity}`;
    cartProductDiv.appendChild(h3);

    cartElement.appendChild(cartProductDiv);
  });
}
