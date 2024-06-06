function orderNow() {
    showConfirmation();
}

function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    showConfirmation();
    displayCartItems();
}

function showConfirmation() {
    const confirmation = document.getElementById('confirmation');
    if (confirmation) {
        confirmation.style.display = 'block'; // Show the confirmation message
        confirmation.style.opacity = 0;
        let opacity = 0;
        const fadeIn = setInterval(function () {
            if (opacity < 1) {
                opacity += 0.1;
                confirmation.style.opacity = opacity;
            } else {
                clearInterval(fadeIn);
            }
        }, 50);
    }
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = ''; // Clear existing items
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItemsContainer.appendChild(li);
        });
    }
}

function checkout() {
    alert('Proceeding to checkout!');
    localStorage.removeItem('cart');
    displayCartItems();
}

// Display cart items on page load
document.addEventListener('DOMContentLoaded', displayCartItems);
