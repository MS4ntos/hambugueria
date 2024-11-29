
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCVDHivsfn4mTXzUrFl6aWHCnb2KpYMcTY",
    authDomain: "restaurante-8d250.firebaseapp.com",
    projectId: "restaurante-8d250",
    storageBucket: "restaurante-8d250.firebasestorage.app",
    messagingSenderId: "548562199471",
    appId: "1:548562199471:web:6cd6caafa7d445a9a4855a",
    measurementId: "G-E828YFETHG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



const chooseButtons = document.querySelectorAll('.choose-button');


chooseButtons.forEach(button => {
  button.addEventListener('click', () => {
  
    const product = {
      name: button.dataset.name,
      price: button.dataset.price,
      image: button.dataset.image,
    };

    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

 
    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.name} foi adicionado ao carrinho!`);
  });
});






document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.querySelector('.total-price');
  
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  
    const calculateTotal = () => {
      const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
      totalPriceElement.textContent = `R$ ${total.toFixed(2)}`;
    };
  
    
    const renderCart = () => {
      cartItemsContainer.innerHTML = ''; 
  
      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
  
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}" class="product-image">
          <div class="product-details">
            <h2 class="product-name">${item.name}</h2>
            <p class="product-price">R$ ${item.price}</p>
          </div>
          <button class="remove-item">Remover</button>
        `;
  
       
        cartItemsContainer.appendChild(cartItem);
      });
  
      calculateTotal();
    };
  
    cartItemsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-item')) {
        const productName = e.target.parentElement.querySelector('.product-name').textContent;
  
     
        cart = cart.filter(item => item.name !== productName);
        localStorage.setItem('cart', JSON.stringify(cart));
  
        renderCart();
      }
    });
  
    renderCart();
  });



  document.addEventListener('DOMContentLoaded', () => {
    const finalizeButton = document.querySelector('.checkout-button');
    const modal = document.getElementById('confirmation-modal');
    const closeModalButton = document.getElementById('close-modal');
  
    
    finalizeButton.addEventListener('click', () => {
      modal.classList.add('visible');
    });
  
    
    closeModalButton.addEventListener('click', () => {
      modal.classList.remove('visible');
    });
  
    
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.remove('visible');
      }
    });
  });
  
  