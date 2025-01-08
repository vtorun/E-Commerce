import { addToCart } from "./cart.js";
import { fetchProducts, renderProducts } from "./product.js";

//menu butonuna ve navbara erişim.
const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".navbar");

//menu iconuna tıklayınca navbara class ekleme
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

//hangi sayfada olduğumuzu kontrol edip, ona göre api ye sayfa yüklenirken istek atıyoruz.
document.addEventListener("DOMContentLoaded", async () => {
  if (window.location.pathname.includes("cart.html")) {
    console.log("Cart sayfasındasınız");
  } else {
    const product = await fetchProducts();
    //render fonksiyonunu çalıştır. api den gelen veriyi bağla
    renderProducts(product, (event) => {
      //debugger;
      addToCart(event, product);
    });
  }
});
