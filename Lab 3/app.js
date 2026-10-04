/**
 * HYPERSTORE - ULTRA MODERN E-COMMERCE & INTERACTIVE SCRIPTS
 * Includes Lab 2 tasks + Dark Mode + Spin Wheel + Live Card Simulator + Audio FX
 */

// ==========================================
// 1. PRODUCT CATALOG DATA WITH COLOR VARIANTS
// ==========================================
const products = [
    {
        id: 1,
        name: "Aura Pro Wireless Headphones",
        category: "electronics",
        price: 199.99,
        oldPrice: 249.99,
        badge: "🔥 40% OFF",
        badgeClass: "bg-danger text-white",
        rating: 4.9,
        reviewsCount: 142,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
        colors: ["#1e293b", "#e2e8f0", "#6366f1"],
        description: "Next-generation adaptive noise cancellation, 40-hour playtime, and 3D spatial audio."
    },
    {
        id: 2,
        name: "Chronos Obsidian Smartwatch",
        category: "accessories",
        price: 149.00,
        oldPrice: 189.00,
        badge: "⚡ FLASH DEAL",
        badgeClass: "bg-warning text-dark",
        rating: 4.8,
        reviewsCount: 98,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
        colors: ["#0f172a", "#d97706", "#0284c7"],
        description: "Titanium casing with sapphire glass, heart rate ECG sensor, and 7-day battery life."
    },
    {
        id: 3,
        name: "CyberRunner Speed Sneakers",
        category: "footwear",
        price: 119.50,
        oldPrice: 140.00,
        badge: "✨ NEW DROP",
        badgeClass: "bg-success text-white",
        rating: 4.7,
        reviewsCount: 76,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
        colors: ["#dc2626", "#2563eb", "#10b981"],
        description: "Engineered responsive cushioning with carbon fiber plate for ultra-lightweight propulsion."
    },
    {
        id: 4,
        name: "Lumix 4K Cinema Camera",
        category: "electronics",
        price: 349.99,
        oldPrice: 399.99,
        badge: "👑 BESTSELLER",
        badgeClass: "bg-primary text-white",
        rating: 4.9,
        reviewsCount: 115,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80",
        colors: ["#18181b", "#71717a"],
        description: "Professional sensor with dual native ISO, 10-bit internal video, and hybrid autofocus."
    },
    {
        id: 5,
        name: "Raw Denim Vintage Overshirt",
        category: "fashion",
        price: 79.99,
        oldPrice: 99.00,
        badge: "TRENDING",
        badgeClass: "bg-info text-dark",
        rating: 4.6,
        reviewsCount: 52,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
        colors: ["#1e3a8a", "#374151"],
        description: "100% Japanese heavy selvedge denim with brushed brass buttons and dual utility chest pockets."
    },
    {
        id: 6,
        name: "Aero Polarized Sunglasses",
        category: "accessories",
        price: 89.00,
        oldPrice: 120.00,
        badge: "🔥 25% OFF",
        badgeClass: "bg-danger text-white",
        rating: 4.8,
        reviewsCount: 130,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
        colors: ["#09090b", "#d97706", "#2563eb"],
        description: "Featherlight aerospace alloy frame with UV400 anti-reflective scratch-proof optics."
    },
    {
        id: 7,
        name: "Apex RGB Mechanical Keyboard",
        category: "electronics",
        price: 129.99,
        oldPrice: 159.99,
        badge: "⚡ HOT",
        badgeClass: "bg-warning text-dark",
        rating: 4.9,
        reviewsCount: 210,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
        colors: ["#111827", "#f3f4f6"],
        description: "Hot-swappable tactile switches, per-key dynamic RGB backlighting, and CNC aluminum plate."
    },
    {
        id: 8,
        name: "Nomad Leather Commuter Bag",
        category: "accessories",
        price: 139.00,
        oldPrice: 175.00,
        badge: "✨ LUXURY",
        badgeClass: "bg-success text-white",
        rating: 4.8,
        reviewsCount: 68,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
        colors: ["#78350f", "#1c1917"],
        description: "Full-grain vegetable tanned leather with weatherproof zippers and padded 16” laptop slot."
    }
];

// Initial Customer Reviews Data
let customerReviews = [
    {
        id: 1,
        name: "Zainab Malik",
        role: "VIP Member",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        title: "Best shopping experience ever! 🔥",
        comment: "The Aura Headphones are out of this world! Sound quality is crisp and the active noise cancellation completely blocks out office noise."
    },
    {
        id: 2,
        name: "Hamza Tariq",
        role: "Verified Buyer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        title: "Super Fast Shipping & Clean UI",
        comment: "Order placed on Tuesday and received Wednesday morning. The checkout was seamless with the live card simulator. 10/10 recommend!"
    },
    {
        id: 3,
        name: "Sophia Chen",
        role: "Verified Buyer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
        rating: 5,
        title: "Obsessed with the Chronos Watch",
        comment: "The finish on the watch looks like a luxury $800 timepiece. Fits comfortably and battery lasts well over a full week."
    }
];

// Live Social Proof Feeds
const liveNotifications = [
    { user: "Ali from Lahore", item: "Aura Pro Wireless Headphones", time: "just now" },
    { user: "Fatima from Karachi", item: "CyberRunner Speed Sneakers", time: "2 mins ago" },
    { user: "Usman from Islamabad", item: "Apex RGB Mechanical Keyboard", time: "4 mins ago" },
    { user: "Sara from Dubai", item: "Nomad Leather Commuter Bag", time: "6 mins ago" }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let cart = JSON.parse(localStorage.getItem('hyper_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('hyper_wishlist')) || [];
let activeCategory = 'all';
let currentSearchQuery = '';
let activeDiscountPercent = 0;
let userAuth = JSON.parse(localStorage.getItem('hyper_user')) || null;
let soundEnabled = true;

// Web Audio API Sound Synthesizer (Zero asset dependency!)
function playTone(type) {
    if (!soundEnabled) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'click') {
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        } else if (type === 'cart') {
            osc.frequency.setValueAtTime(440, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.15);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } else if (type === 'win') {
            osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
            osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
            osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
            osc.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.3); // C6
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.45);
            osc.start();
            osc.stop(ctx.currentTime + 0.45);
        }
    } catch (e) {}
}

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCountdown();
    renderProducts();
    renderReviews();
    updateCartUI();
    updateWishlistUI();
    updateAuthUI();
    setupEventListeners();
    startLiveActivityFeed();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('nova_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleBtn(savedTheme);
}

function toggleTheme() {
    playTone('click');
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('nova_theme', next);
    updateThemeToggleBtn(next);
}

function updateThemeToggleBtn(theme) {
    const icon = document.getElementById('theme-toggle-icon');
    if (icon) {
        icon.className = theme === 'dark' ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill text-primary';
    }
}

// Flash Sale Countdown Timer
function initCountdown() {
    let hours = 5, minutes = 42, seconds = 19;
    setInterval(() => {
        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) hours--;
            }
        }
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-minutes');
        const sEl = document.getElementById('cd-seconds');
        if (hEl) hEl.textContent = String(hours).padStart(2, '0');
        if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
        if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// ==========================================
// 4. EVENT LISTENERS SETUP
// ==========================================
function setupEventListeners() {
    // Category pills
    const filterBtns = document.querySelectorAll('.category-pill');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            playTone('click');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-category');
            renderProducts();
        });
    });

    // Search bar
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.toLowerCase().trim();
            renderProducts();
        });
    }

    // Checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }

    // Promo code apply
    const applyPromoBtn = document.getElementById('apply-promo-btn');
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', applyPromoCode);
    }

    // Live Card simulator listeners
    setupCardSimulator();

    // Auth forms
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    const signupForm = document.getElementById('signup-form');
    if (signupForm) signupForm.addEventListener('submit', handleSignup);

    // Review form
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) reviewForm.addEventListener('submit', handleReviewSubmit);
}

// ==========================================
// 5. PRODUCT RENDERING (Lab 2 Tasks 2, 4, 5, 6)
// ==========================================
function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;

    const filtered = products.filter(p => {
        const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(currentSearchQuery) || p.description.toLowerCase().includes(currentSearchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="p-5 bg-white rounded-4 border shadow-sm">
                    <i class="bi bi-search display-3 text-primary mb-3"></i>
                    <h4 class="fw-bold">No Products Found</h4>
                    <p class="text-muted">Try searching with different keywords or reset categories.</p>
                    <button class="btn btn-primary mt-2" onclick="resetFilters()">Reset All Filters</button>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(p => {
        const isWishlisted = wishlist.includes(p.id);
        return `
            <div class="col-12 col-sm-6 col-lg-3 product-item">
                <!-- Lab Task 2: Relative parent card -->
                <div class="product-card">
                    <!-- Lab Task 2: Absolute badge -->
                    <span class="card-badge-top-left badge ${p.badgeClass} badge-pulse">${p.badge}</span>
                    
                    <!-- Absolute Wishlist Heart Button -->
                    <button class="card-badge-top-right btn btn-light btn-sm rounded-circle shadow-sm" onclick="toggleWishlist(${p.id})">
                        <i class="bi ${isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart text-muted'}"></i>
                    </button>

                    <!-- Lab Task 4: Image with Grayscale Filter & Hover Color Transition -->
                    <div class="product-image-box">
                        <img src="${p.image}" alt="${p.name}" class="product-img img-fluid" id="product-img-${p.id}" loading="lazy">
                    </div>

                    <div class="p-3 d-flex flex-column flex-grow-1">
                        <!-- Color Variant Pickers -->
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <div class="d-flex gap-1">
                                ${p.colors.map((c, i) => `
                                    <span class="color-variant-dot" style="background-color: ${c};" title="Variant ${i+1}" onclick="changeProductVariant(${p.id}, '${c}')"></span>
                                `).join('')}
                            </div>
                            <div class="small fw-bold text-warning d-flex align-items-center gap-1">
                                <i class="bi bi-star-fill"></i>
                                <span class="text-dark">${p.rating}</span>
                                <span class="text-muted small">(${p.reviewsCount})</span>
                            </div>
                        </div>

                        <h6 class="fw-bold mb-1 text-truncate" title="${p.name}">${p.name}</h6>
                        <p class="text-muted small mb-3 flex-grow-1" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                            ${p.description}
                        </p>

                        <div class="mb-3 d-flex align-items-baseline gap-2">
                            <span class="fs-5 fw-extrabold text-primary">$${p.price.toFixed(2)}</span>
                            <span class="small text-decoration-line-through text-muted">$${p.oldPrice.toFixed(2)}</span>
                        </div>

                        <!-- Lab Task 5: Button Row using Bootstrap Flex Utilities -->
                        <div class="d-flex justify-content-between align-items-center gap-2 pt-2 border-top">
                            <button class="btn btn-outline-secondary btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1" onclick="openQuickView(${p.id})">
                                <i class="bi bi-eye"></i> View
                            </button>
                            <button class="btn btn-primary btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-1" onclick="addToCart(${p.id})">
                                <i class="bi bi-bag-plus"></i> Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function changeProductVariant(productId, color) {
    playTone('click');
    const imgEl = document.getElementById(`product-img-${productId}`);
    if (imgEl) {
        imgEl.style.transform = 'scale(0.8) rotate(5deg)';
        setTimeout(() => {
            imgEl.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    }
    showToast(`Color variant selected!`, 'info');
}

function resetFilters() {
    activeCategory = 'all';
    currentSearchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    const filterBtns = document.querySelectorAll('.category-pill');
    filterBtns.forEach(b => {
        if (b.getAttribute('data-category') === 'all') b.classList.add('active');
        else b.classList.remove('active');
    });
    renderProducts();
}

// ==========================================
// 6. CART MANAGEMENT & FREE SHIPPING METER
// ==========================================
function addToCart(productId, quantity = 1) {
    playTone('cart');
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    updateCartUI();
    showToast(`Added "${product.name}" to cart! 🛍️`, 'success');
}

function changeQuantity(productId, delta) {
    playTone('click');
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function setQuantityDirectly(productId, newQty) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    const qty = parseInt(newQty, 10);
    if (isNaN(qty) || qty <= 0) {
        removeFromCart(productId);
    } else {
        item.quantity = qty;
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    playTone('click');
    const item = cart.find(i => i.id === productId);
    const itemName = item ? item.name : "Item";
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    updateCartUI();
    showToast(`Removed "${itemName}" from cart`, 'info');
}

function clearCart() {
    playTone('click');
    if (cart.length === 0) return;
    cart = [];
    saveCart();
    updateCartUI();
    showToast("Cart has been cleared", "info");
}

function saveCart() {
    localStorage.setItem('hyper_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = subtotal * activeDiscountPercent;
    const freeShippingGoal = 150;
    const shipping = totalCount > 0 ? (subtotal >= freeShippingGoal ? 0 : 9.99) : 0;
    const total = Math.max(0, subtotal - discountAmount + shipping);

    // Badges update
    const badgeEls = document.querySelectorAll('.cart-count-badge');
    badgeEls.forEach(el => {
        el.textContent = totalCount;
        el.style.display = totalCount > 0 ? 'inline-block' : 'none';
    });

    // Shipping meter calculation
    const progressEl = document.getElementById('shipping-progress-bar');
    const progressMsgEl = document.getElementById('shipping-progress-msg');
    if (progressEl && progressMsgEl) {
        if (subtotal >= freeShippingGoal) {
            progressEl.style.width = '100%';
            progressEl.className = 'progress-bar bg-success progress-bar-striped progress-bar-animated';
            progressMsgEl.innerHTML = '<strong class="text-success">🎉 Congratulations! You unlocked FREE Express Delivery!</strong>';
        } else {
            const percent = Math.min(100, (subtotal / freeShippingGoal) * 100);
            const needed = (freeShippingGoal - subtotal).toFixed(2);
            progressEl.style.width = `${percent}%`;
            progressEl.className = 'progress-bar bg-primary';
            progressMsgEl.innerHTML = `Add <strong class="text-primary">$${needed}</strong> more to unlock <strong>FREE Express Delivery</strong>!`;
        }
    }

    // Render Drawer Cart
    const cartContainer = document.getElementById('cart-items-container');
    const cartFooter = document.getElementById('cart-footer-panel');

    if (cartContainer) {
        if (cart.length === 0) {
            cartContainer.innerHTML = `
                <div class="text-center py-5">
                    <i class="bi bi-bag-heart display-2 text-primary opacity-50 mb-3"></i>
                    <h5 class="fw-bold">Your Cart is Empty</h5>
                    <p class="text-muted small">Explore our flash deals and add items you love!</p>
                    <button class="btn btn-primary btn-sm rounded-pill px-4" data-bs-dismiss="offcanvas">Start Shopping</button>
                </div>
            `;
            if (cartFooter) cartFooter.style.display = 'none';
        } else {
            if (cartFooter) cartFooter.style.display = 'block';
            cartContainer.innerHTML = cart.map(item => `
                <div class="d-flex align-items-center justify-content-between p-3 mb-2 bg-white rounded-3 border shadow-sm">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img me-3">
                    <div class="flex-grow-1 me-3">
                        <h6 class="fw-bold mb-1 text-truncate" style="max-width: 160px;">${item.name}</h6>
                        <div class="text-primary fw-bold mb-2">$${item.price.toFixed(2)}</div>
                        <!-- Lab Task 5: Flex Utility Quantity Box -->
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                            <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="setQuantityDirectly(${item.id}, this.value)">
                            <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <div class="text-end">
                        <div class="fw-bold mb-2">$${(item.price * item.quantity).toFixed(2)}</div>
                        <button class="btn btn-outline-danger btn-sm rounded-circle" title="Remove" onclick="removeFromCart(${item.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    // Update Totals
    const subtotalEl = document.getElementById('cart-subtotal');
    const shippingEl = document.getElementById('cart-shipping');
    const discountEl = document.getElementById('cart-discount');
    const totalEl = document.getElementById('cart-total');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? (totalCount > 0 ? 'FREE' : '$0.00') : `$${shipping.toFixed(2)}`;
    if (discountEl) discountEl.textContent = `-$${discountAmount.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    // Update Checkout Preview Table
    const checkoutItemsEl = document.getElementById('checkout-items-preview');
    if (checkoutItemsEl) {
        if (cart.length === 0) {
            checkoutItemsEl.innerHTML = `<tr><td colspan="4" class="text-center py-3 text-muted">No items in cart</td></tr>`;
        } else {
            checkoutItemsEl.innerHTML = cart.map(item => `
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <img src="${item.image}" alt="${item.name}" width="36" height="36" class="rounded me-2 border">
                            <span class="fw-semibold small text-truncate" style="max-width: 140px;">${item.name}</span>
                        </div>
                    </td>
                    <td class="text-center small">${item.quantity}</td>
                    <td class="text-end small">$${item.price.toFixed(2)}</td>
                    <td class="text-end fw-bold small">$${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
            `).join('');
        }
    }

    const checkoutTotalEl = document.getElementById('checkout-final-total');
    if (checkoutTotalEl) checkoutTotalEl.textContent = `$${total.toFixed(2)}`;
}

// ==========================================
// 7. WISHLIST MANAGEMENT
// ==========================================
function toggleWishlist(productId) {
    playTone('click');
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast("Removed from Wishlist", "info");
    } else {
        wishlist.push(productId);
        showToast("Saved to Wishlist! ❤️", "success");
    }
    localStorage.setItem('hyper_wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts();
}

function updateWishlistUI() {
    const countEl = document.getElementById('wishlist-count-badge');
    if (countEl) {
        countEl.textContent = wishlist.length;
        countEl.style.display = wishlist.length > 0 ? 'inline-block' : 'none';
    }
}

// ==========================================
// 8. SPIN THE LUCKY WHEEL GAME (MAZAY KA FEATURE!)
// ==========================================
let isSpinning = false;
function spinLuckyWheel() {
    if (isSpinning) return;
    isSpinning = true;
    playTone('click');

    const wheel = document.getElementById('lucky-wheel-disc');
    const resultMsg = document.getElementById('spin-result-msg');
    const spinBtn = document.getElementById('spin-btn');
    if (spinBtn) spinBtn.disabled = true;

    // Random rotation between 1800 and 3600 degrees (5 to 10 full turns)
    const randomDeg = Math.floor(1800 + Math.random() * 1800);
    if (wheel) {
        wheel.style.transform = `rotate(${randomDeg}deg)`;
    }

    setTimeout(() => {
        isSpinning = false;
        playTone('win');
        activeDiscountPercent = 0.25;
        updateCartUI();

        if (resultMsg) {
            resultMsg.innerHTML = `
                <div class="alert alert-success mt-3 py-2 text-center">
                    <h5 class="fw-bold mb-1">🎉 You Won 25% OFF!</h5>
                    <p class="small mb-0">Code <strong>LUCKY25</strong> applied automatically to your cart!</p>
                </div>
            `;
        }
        if (spinBtn) spinBtn.textContent = 'Coupon Activated!';
        showToast('🎉 Won 25% OFF discount coupon!', 'success');
    }, 3600);
}

// ==========================================
// 9. LIVE CREDIT CARD SIMULATOR
// ==========================================
function setupCardSimulator() {
    const cardNumInput = document.getElementById('card-num-input');
    const cardNameInput = document.getElementById('card-name-input');
    const cardExpInput = document.getElementById('card-exp-input');

    if (cardNumInput) {
        cardNumInput.addEventListener('input', (e) => {
            const val = e.target.value || '•••• •••• •••• ••••';
            document.getElementById('live-card-number').textContent = val;
        });
    }
    if (cardNameInput) {
        cardNameInput.addEventListener('input', (e) => {
            const val = e.target.value || 'YOUR FULL NAME';
            document.getElementById('live-card-holder').textContent = val.toUpperCase();
        });
    }
    if (cardExpInput) {
        cardExpInput.addEventListener('input', (e) => {
            const val = e.target.value || 'MM/YY';
            document.getElementById('live-card-expiry').textContent = val;
        });
    }
}

// ==========================================
// 10. SOCIAL PROOF LIVE ACTIVITY TOAST
// ==========================================
function startLiveActivityFeed() {
    let index = 0;
    const toast = document.getElementById('live-activity-toast');
    if (!toast) return;

    setInterval(() => {
        const item = liveNotifications[index];
        index = (index + 1) % liveNotifications.length;

        toast.innerHTML = `
            <div class="bg-primary-subtle text-primary p-2 rounded-circle">
                <i class="bi bi-bag-check-fill fs-5"></i>
            </div>
            <div>
                <strong class="d-block small text-dark">${item.user}</strong>
                <span class="text-muted" style="font-size: 0.78rem;">Purchased ${item.item} (${item.time})</span>
            </div>
        `;

        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 5000);
    }, 14000);
}

// ==========================================
// 11. CHECKOUT & RECEIPT
// ==========================================
function openCheckoutModal() {
    playTone('click');
    if (cart.length === 0) {
        showToast("Your cart is empty! Add products first.", "danger");
        return;
    }
    const offcanvasEl = document.getElementById('cartOffcanvas');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvas) offcanvas.hide();

    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
}

function handleCheckout(e) {
    e.preventDefault();
    playTone('win');

    const fullName = document.getElementById('checkout-name').value;
    const email = document.getElementById('checkout-email').value;
    const address = document.getElementById('checkout-address').value;
    const city = document.getElementById('checkout-city').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "Credit Card";

    const orderId = 'HYPER-' + Math.floor(100000 + Math.random() * 900000);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discountAmount = subtotal * activeDiscountPercent;
    const shipping = subtotal >= 150 ? 0 : 9.99;
    const total = Math.max(0, subtotal - discountAmount + shipping);

    const checkoutModalEl = document.getElementById('checkoutModal');
    const checkoutModal = bootstrap.Modal.getInstance(checkoutModalEl);
    if (checkoutModal) checkoutModal.hide();

    const receiptContainer = document.getElementById('receipt-summary-content');
    if (receiptContainer) {
        receiptContainer.innerHTML = `
            <div class="text-center mb-4">
                <div class="display-3 text-success mb-2"><i class="bi bi-check-circle-fill"></i></div>
                <h4 class="fw-bold">Payment & Order Confirmed!</h4>
                <p class="text-muted small">Tracking Order ID: <strong class="text-primary">${orderId}</strong></p>
            </div>
            <div class="bg-light p-3 rounded-3 mb-3 border">
                <div class="row g-2 small">
                    <div class="col-6"><strong>Customer:</strong> ${fullName}</div>
                    <div class="col-6"><strong>Email:</strong> ${email}</div>
                    <div class="col-12"><strong>Shipping to:</strong> ${address}, ${city}</div>
                    <div class="col-12"><strong>Payment Method:</strong> ${paymentMethod}</div>
                </div>
            </div>
            <h6 class="fw-bold mb-2">Itemized Order Breakdown</h6>
            <ul class="list-group list-group-flush mb-3">
                ${cart.map(i => `
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0 py-2">
                        <span>${i.name} <span class="text-muted">× ${i.quantity}</span></span>
                        <span class="fw-bold">$${(i.price * i.quantity).toFixed(2)}</span>
                    </li>
                `).join('')}
            </ul>
            <div class="border-top pt-2">
                <div class="d-flex justify-content-between small text-muted"><span>Subtotal:</span><span>$${subtotal.toFixed(2)}</span></div>
                ${activeDiscountPercent > 0 ? `<div class="d-flex justify-content-between small text-success"><span>Discount:</span><span>-$${discountAmount.toFixed(2)}</span></div>` : ''}
                <div class="d-flex justify-content-between small text-muted"><span>Shipping:</span><span>${shipping === 0 ? 'FREE Express' : '$' + shipping.toFixed(2)}</span></div>
                <div class="d-flex justify-content-between fw-bold fs-5 mt-2 text-primary"><span>Total Paid:</span><span>$${total.toFixed(2)}</span></div>
            </div>
        `;
    }

    cart = [];
    activeDiscountPercent = 0;
    saveCart();
    updateCartUI();

    const confirmModal = new bootstrap.Modal(document.getElementById('orderConfirmModal'));
    confirmModal.show();
}

// Promo Code
function applyPromoCode() {
    playTone('click');
    const input = document.getElementById('promo-input');
    const msgEl = document.getElementById('promo-message');
    if (!input) return;

    const code = input.value.trim().toUpperCase();
    if (code === 'DISCOUNT10' || code === 'SAVE10') {
        activeDiscountPercent = 0.10;
        if (msgEl) {
            msgEl.className = 'text-success small mt-1';
            msgEl.textContent = '10% Discount applied!';
        }
        updateCartUI();
        showToast('10% Coupon activated!', 'success');
    } else if (code === 'LUCKY25' || code === 'SUPER20') {
        activeDiscountPercent = 0.25;
        if (msgEl) {
            msgEl.className = 'text-success small mt-1';
            msgEl.textContent = '25% VIP Discount applied!';
        }
        updateCartUI();
        showToast('25% VIP Coupon activated!', 'success');
    } else {
        if (msgEl) {
            msgEl.className = 'text-danger small mt-1';
            msgEl.textContent = 'Invalid code. Spin the Lucky Wheel for discounts!';
        }
    }
}

// Quick View Modal
function openQuickView(productId) {
    playTone('click');
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('quickViewTitle');
    const modalBody = document.getElementById('quickViewBody');

    if (modalTitle) modalTitle.textContent = product.name;
    if (modalBody) {
        modalBody.innerHTML = `
            <div class="row g-4 align-items-center">
                <div class="col-md-6 text-center">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid rounded-4 border p-2 shadow-sm" style="max-height: 280px;">
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-center gap-2 mb-2">
                        <span class="badge ${product.badgeClass}">${product.badge}</span>
                        <span class="badge bg-light text-dark border text-uppercase">${product.category}</span>
                    </div>
                    <h4 class="fw-bold mb-2">${product.name}</h4>
                    <div class="d-flex align-items-center mb-3">
                        <div class="text-warning me-2">${'★'.repeat(Math.floor(product.rating))}</div>
                        <span class="fw-bold">${product.rating}</span>
                        <span class="text-muted ms-1">(${product.reviewsCount} reviews)</span>
                    </div>
                    <div class="d-flex align-items-baseline gap-2 mb-3">
                        <span class="fs-3 fw-bold text-primary">$${product.price.toFixed(2)}</span>
                        <span class="text-decoration-line-through text-muted">$${product.oldPrice.toFixed(2)}</span>
                    </div>
                    <p class="text-muted small mb-4">${product.description}</p>
                    
                    <div class="d-flex align-items-center gap-3">
                        <div class="quantity-control">
                            <button class="quantity-btn" id="qv-qty-minus">-</button>
                            <input type="number" class="quantity-input" id="qv-qty-input" value="1" min="1">
                            <button class="quantity-btn" id="qv-qty-plus">+</button>
                        </div>
                        <button class="btn btn-primary flex-grow-1" id="qv-submit-btn">
                            <i class="bi bi-cart-plus me-1"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;

        const qtyInput = document.getElementById('qv-qty-input');
        document.getElementById('qv-qty-minus').onclick = () => {
            let val = parseInt(qtyInput.value) || 1;
            if (val > 1) qtyInput.value = val - 1;
        };
        document.getElementById('qv-qty-plus').onclick = () => {
            let val = parseInt(qtyInput.value) || 1;
            qtyInput.value = val + 1;
        };
        document.getElementById('qv-submit-btn').onclick = () => {
            let qty = parseInt(qtyInput.value) || 1;
            addToCart(product.id, qty);
            const qvModal = bootstrap.Modal.getInstance(document.getElementById('quickViewModal'));
            if (qvModal) qvModal.hide();
        };
    }

    const modal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    modal.show();
}

// Reviews
function renderReviews() {
    const container = document.getElementById('reviews-grid');
    if (!container) return;

    container.innerHTML = customerReviews.map(r => `
        <!-- Lab Task 6: :nth-child(even) styling applied -->
        <div class="col-12 col-md-4 review-col">
            <div class="review-card">
                <!-- Lab Task 3: ::before quote decoration -->
                <div class="review-quote position-relative">
                    <div class="d-flex align-items-center justify-content-between mb-3 position-relative z-1">
                        <div class="d-flex align-items-center gap-3">
                            <img src="${r.avatar}" alt="${r.name}" class="reviewer-avatar">
                            <div>
                                <h6 class="fw-bold mb-0">${r.name}</h6>
                                <span class="badge bg-success-subtle text-success small">${r.role}</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-warning mb-2 position-relative z-1">
                        ${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
                    </div>
                    <h6 class="fw-bold mb-1 position-relative z-1">${r.title}</h6>
                    <p class="text-muted small mb-0 position-relative z-1">${r.comment}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function handleReviewSubmit(e) {
    e.preventDefault();
    playTone('win');
    const name = document.getElementById('review-name').value;
    const rating = parseInt(document.getElementById('review-rating').value, 10);
    const title = document.getElementById('review-title').value;
    const comment = document.getElementById('review-comment').value;

    const newReview = {
        id: Date.now(),
        name: name,
        role: "Verified Buyer",
        avatar: `https://images.unsplash.com/photo-${1534528741775 + Math.floor(Math.random() * 100)}?w=120&auto=format&fit=crop&q=80`,
        rating: rating,
        title: title,
        comment: comment
    };

    customerReviews.unshift(newReview);
    renderReviews();

    const reviewModalEl = document.getElementById('addReviewModal');
    const modal = bootstrap.Modal.getInstance(reviewModalEl);
    if (modal) modal.hide();

    e.target.reset();
    showToast("Your review was posted! Thank you!", "success");
}

// Authentication (Login / Signup)
function handleLogin(e) {
    e.preventDefault();
    playTone('win');
    const email = document.getElementById('login-email').value;
    const name = email.split('@')[0];

    userAuth = { name: name.charAt(0).toUpperCase() + name.slice(1), email: email };
    localStorage.setItem('hyper_user', JSON.stringify(userAuth));
    updateAuthUI();

    const authModalEl = document.getElementById('authModal');
    const modal = bootstrap.Modal.getInstance(authModalEl);
    if (modal) modal.hide();

    showToast(`Welcome back, ${userAuth.name}!`, "success");
}

function handleSignup(e) {
    e.preventDefault();
    playTone('win');
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;

    userAuth = { name: name, email: email };
    localStorage.setItem('hyper_user', JSON.stringify(userAuth));
    updateAuthUI();

    const authModalEl = document.getElementById('authModal');
    const modal = bootstrap.Modal.getInstance(authModalEl);
    if (modal) modal.hide();

    showToast(`Welcome to HyperStore, ${name}!`, "success");
}

function handleLogout() {
    playTone('click');
    userAuth = null;
    localStorage.removeItem('hyper_user');
    updateAuthUI();
    showToast("Signed out successfully", "info");
}

function updateAuthUI() {
    const authBtnContainer = document.getElementById('auth-nav-container');
    if (!authBtnContainer) return;

    if (userAuth) {
        authBtnContainer.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-outline-primary btn-sm rounded-pill dropdown-toggle d-flex align-items-center gap-2 px-3" data-bs-toggle="dropdown">
                    <i class="bi bi-person-circle fs-6"></i>
                    <span>${userAuth.name}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow-sm">
                    <li><h6 class="dropdown-header">Signed in as ${userAuth.email}</h6></li>
                    <li><a class="dropdown-item" href="#products"><i class="bi bi-bag-check me-2"></i>My Orders</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><button class="dropdown-item text-danger" onclick="handleLogout()"><i class="bi bi-box-arrow-right me-2"></i>Sign Out</button></li>
                </ul>
            </div>
        `;
    } else {
        authBtnContainer.innerHTML = `
            <div class="d-flex align-items-center gap-2">
                <button class="btn btn-outline-primary btn-sm rounded-pill fw-semibold px-3" data-bs-toggle="modal" data-bs-target="#authModal" onclick="switchAuthTab('login')">
                    Login
                </button>
                <button class="btn btn-primary btn-sm rounded-pill fw-semibold px-3 d-none d-md-inline-block" data-bs-toggle="modal" data-bs-target="#authModal" onclick="switchAuthTab('signup')">
                    Sign Up
                </button>
            </div>
        `;
    }
}

function switchAuthTab(tab) {
    if (tab === 'login') {
        const loginTab = document.getElementById('login-tab');
        if (loginTab) bootstrap.Tab.getOrCreateInstance(loginTab).show();
    } else {
        const signupTab = document.getElementById('signup-tab');
        if (signupTab) bootstrap.Tab.getOrCreateInstance(signupTab).show();
    }
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const bgClass = type === 'success' ? 'bg-success' : (type === 'danger' ? 'bg-danger' : 'bg-primary');
    const icon = type === 'success' ? 'bi-check-circle' : (type === 'danger' ? 'bi-exclamation-circle' : 'bi-info-circle');

    const toastEl = document.createElement('div');
    toastEl.className = `toast align-items-center text-white ${bgClass} border-0 shadow-lg mb-2`;
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');

    toastEl.innerHTML = `
        <div class="d-flex">
            <div class="toast-body d-flex align-items-center gap-2">
                <i class="bi ${icon} fs-5"></i>
                <span>${message}</span>
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;

    toastContainer.appendChild(toastEl);
    const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
    toast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
        toastEl.remove();
    });
}
