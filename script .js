// Product data
const products = {
    'photo-frames': [
        { id: 'img2', name: 'Floral Memory Frame' },
        { id: 'img4', name: 'Golden Elegance Frame' },
        { id: 'img8', name: 'Ocean Wave Frame' },
        { id: 'img9', name: 'Sunset Glow Frame' }
    ],
    'jewelry': [
        { id: 'img3', name: 'Crystal Resin Necklace' }
    ],
    'scenery': [
        { id: 'img1', name: 'Mountain Sunset' },
        { id: 'img5', name: 'Forest Serenity' },
        { id: 'img6', name: 'Ocean Paradise' },
        { id: 'img7', name: 'Desert Bloom' },
        { id: 'img11', name: 'River Reflections' }
    ]
};

const categoryTitles = {
    'photo-frames': 'Photo Frames',
    'jewelry': 'Jewelry',
    'scenery': 'Scenery Art'
};

// DOM elements
const categoriesSection = document.getElementById('categories');
const productsSection = document.getElementById('products');
const productsGrid = document.getElementById('products-grid');
const categoryTitle = document.getElementById('category-title');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);

    // Category click handlers
    document.querySelectorAll('.category-card').forEach((card, index) => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            showProducts(category);
        });
    });
});

// Show categories (default view)
function showCategories() {
    categoriesSection.classList.add('active');
    productsSection.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show products for specific category
function showProducts(category) {
    categoriesSection.classList.remove('active');
    productsSection.classList.add('active');
    
    // Update title
    categoryTitle.textContent = categoryTitles[category];
    
    // Clear previous products
    productsGrid.innerHTML = '';
    
    // Show products
    const categoryProducts = products[category];
    categoryProducts.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
    
    // Scroll to top of products
    setTimeout(() => {
        document.querySelector('.products').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }, 100);
}

// Create product card
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=Hi!%20I%20love%20your%20${product.name}!%20Please%20share%20details%20and%20pricing.`;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="images/${product.id}.jpg" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="order-buttons">
                <a href="${whatsappUrl}" class="btn-whatsapp" target="_blank">
                    💬 WhatsApp
                </a>
                <button class="btn-razorpay" onclick="initiateRazorpay()">
                    💳 Pay Now
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Razorpay placeholder function
function initiateRazorpay() {
    alert('🛒 Razorpay integration coming soon!\n\nFor now, please use WhatsApp to place your order. 🙏');
    
    // WhatsApp fallback
    window.open('https://wa.me/919876543210?text=Hi!%20I%27m%20ready%20to%20place%20an%20order!', '_blank');
}