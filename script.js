let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`¡${name} añadido al carrito! 🎉`);
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

const track = document.querySelector('.carousel-track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

next.addEventListener('click', () => {
    index = (index + 1) % 3;
    track.style.transform = `translateX(-${index * 100}%)`;
});

prev.addEventListener('click', () => {
    index = (index - 1 + 3) % 3;
    track.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('thanks').style.display = 'block';
    this.reset();
    setTimeout(() => {
        document.getElementById('thanks').style.display = 'none';
    }, 5000);
});