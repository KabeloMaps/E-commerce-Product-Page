const galleryImages = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex";
  lightboxImg.src = galleryImages[currentIndex];
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryImages.length - 1;
  if (currentIndex >= galleryImages.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = galleryImages[currentIndex];
}

function updateMainImage(index) {
  currentIndex = index;
  document.getElementById("product-img").src = galleryImages[currentIndex];
}

let quantity = 0;
const quantityDisplay = document.getElementById("quantity");
const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const addToCartBtn = document.querySelector(".Add-To-Cart button");

const cart = []; // Simple cart array to hold items

minusBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

plusBtn.addEventListener("click", () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

addToCartBtn.addEventListener("click", () => {
  if (quantity === 0) {
    alert("Please select a quantity before adding to cart.");
    return;
  }
  // Example product data; extend as needed
  const product = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    quantity: quantity,
  };

  // Add or update product in cart
  const existingIndex = cart.findIndex((item) => item.id === product.id);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push(product);
  }

  alert(`Added ${quantity} item(s) to cart.`);
  quantity = 0;
  quantityDisplay.textContent = quantity;

  console.log("Current cart:", cart); // For debugging
});
