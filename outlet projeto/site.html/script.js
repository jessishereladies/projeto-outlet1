let cartCount = 0;

document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    document.querySelector(".cart-count").textContent = cartCount;
    alert("Produto adicionado ao carrinho!");
  });
});

function openWhatsApp() {
  window.open("https://wa.me/5500000000000", "_blank");
}
