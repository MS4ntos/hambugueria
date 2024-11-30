


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



  document.addEventListener('DOMContentLoaded', ()  => {
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
  
  