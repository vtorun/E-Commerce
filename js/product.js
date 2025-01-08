//ürünleri api den alan fonksiyon
export const fetchProducts = async () => {
  try {
    const response = await fetch("db.json");
    if (!response.ok) {
      throw new Error("Veriler Alınamadı");
    }
    return await response.json();
  } catch (error) {
    console.log(`Hata : ${error}`);
    return [];
  }
};
//ürünleri render eden fonksiyon
export const renderProducts = (products,addToCartCallBack) => {
  const productList = document.querySelector("#product-list");
  productList.innerHTML = products
    .map(
      (product) =>
        `<div class="product">
          <img
            src="${product.image}"
            alt="product-img"
            class="product-img"
          />
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-price">$${product.price}</p>
            <a href="#" class="add-to-cart" data-id='${product.id}'>add to cart</a>
          </div>
        </div>
        `
    )
    .join("");
// Add butonlarını seçmek için
  const addToCartButtons = document.getElementsByClassName("add-to-cart");
  for (let index = 0; index < addToCartButtons.length; index++) {
    const addToCartButton=addToCartButtons[index];
    addToCartButton.addEventListener("click",addToCartCallBack)
    
  }
};
