





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



  