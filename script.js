// DOM Elements
const purchaseBtn = document.getElementById('purchaseBtn');
const successModal = document.getElementById('successModal');
const previewBtn = document.getElementById('previewBtn');
const viewNFTBtn = document.getElementById('viewNFTBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const tokenQuantity = document.getElementById('tokenQuantity');
const totalCost = document.getElementById('totalCost');
const summaryQuantity = document.getElementById('summaryQuantity');
const platformFee = document.getElementById('platformFee');
const transactionTotal = document.getElementById('transactionTotal');
const quickBtns = document.querySelectorAll('.quick-btn');

// State
const TOKEN_PRICE = 10.00;
const PLATFORM_FEE_RATE = 0.05; // 5%
const GAS_FEE = 0.10;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
});

// Event Listeners
function initializeEventListeners() {
    previewBtn.addEventListener('click', previewNFT);
    purchaseBtn.addEventListener('click', purchaseNFT);
    viewNFTBtn.addEventListener('click', viewNFT);
    
    // Quantity selector events
    decreaseBtn.addEventListener('click', decreaseQuantity);
    increaseBtn.addEventListener('click', increaseQuantity);
    tokenQuantity.addEventListener('input', handleQuantityInput);
    
    // Quick select buttons
    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const quantity = parseInt(btn.dataset.quantity);
            setQuantity(quantity);
        });
    });
    
    // Close modal when clicking outside
    successModal.addEventListener('click', (e) => {
        if (e.target === successModal) {
            closeSuccessModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSuccessModal();
        }
    });
    
    // Initialize display
    updateDisplay();
}

// Quantity selector functions
function decreaseQuantity() {
    const currentQuantity = parseInt(tokenQuantity.value);
    if (currentQuantity > 1) {
        setQuantity(currentQuantity - 1);
    }
}

function increaseQuantity() {
    const currentQuantity = parseInt(tokenQuantity.value);
    if (currentQuantity < 1000) {
        setQuantity(currentQuantity + 1);
    }
}

function handleQuantityInput(e) {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
        value = 1;
    } else if (value > 1000) {
        value = 1000;
    }
    setQuantity(value);
}

function setQuantity(quantity) {
    tokenQuantity.value = quantity;
    updateDisplay();
}

function updateDisplay() {
    const quantity = parseInt(tokenQuantity.value) || 1;
    const subtotal = quantity * TOKEN_PRICE;
    const platformFee = subtotal * PLATFORM_FEE_RATE;
    const total = subtotal + platformFee + GAS_FEE;
    
    // Update displays
    totalCost.textContent = `$${subtotal.toFixed(2)}`;
    summaryQuantity.textContent = quantity;
    platformFee.textContent = `$${platformFee.toFixed(2)}`;
    transactionTotal.textContent = `$${total.toFixed(2)}`;
}

// NFT Preview
function previewNFT() {
    showNotification('NFT preview feature coming soon!', 'info');
    
    // Simulate preview action
    const previewData = {
        tokenId: '#RE-2024-001',
        contract: '0x1234567890abcdef1234567890abcdef12345678',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        properties: {
            location: 'Manhattan, New York',
            size: '1,850 sqft',
            bedrooms: 3,
            bathrooms: 2,
            type: 'Luxury Apartment'
        }
    };
    
    console.log('NFT Preview Data:', previewData);
}

// Purchase NFT
function purchaseNFT() {
    // Add loading state to purchase button
    purchaseBtn.classList.add('loading');
    purchaseBtn.disabled = true;
    purchaseBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Processing...
    `;
    
    // Simulate purchase process
    setTimeout(() => {
        // Reset button
        purchaseBtn.classList.remove('loading');
        purchaseBtn.disabled = false;
        purchaseBtn.innerHTML = `
            <i class="fas fa-shopping-cart"></i>
            Purchase Now
        `;
        
        // Show success modal
        showSuccessModal();
    }, 3000);
}

function showSuccessModal() {
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

function viewNFT() {
    closeSuccessModal();
    showNotification('Opening your NFT collection...', 'info');
    
    // Simulate navigation to NFT collection
    setTimeout(() => {
        showNotification('NFT collection feature coming soon!', 'info');
    }, 1000);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-width: 300px;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#6366f1'
    };
    return colors[type] || colors.info;
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: background 0.2s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .loading {
        position: relative;
        pointer-events: none;
    }
    
    .loading::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        margin: -8px 0 0 -8px;
        border: 2px solid transparent;
        border-top-color: currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Price simulation (optional enhancement)
function updatePriceSimulation() {
    const ethPriceElement = document.querySelector('.eth-price');
    const usdPriceElement = document.querySelector('.usd-price');
    const priceChangeElement = document.querySelector('.price-change');
    
    if (!ethPriceElement || !usdPriceElement) return;
    
    // Simulate price changes
    setInterval(() => {
        const currentPrice = parseFloat(ethPriceElement.textContent.replace('$', ''));
        if (isNaN(currentPrice)) return;
        
        const change = (Math.random() - 0.5) * 0.01; // ±0.5% change
        const newPrice = (currentPrice + change).toFixed(2);
        const ethToUsd = 1; // Since we're showing USD directly
        const newUsd = (newPrice * ethToUsd).toFixed(2);
        
        ethPriceElement.textContent = `$${newPrice}`;
        usdPriceElement.textContent = 'per token';
        
        // Update price change indicator
        const isPositive = change > 0;
        priceChangeElement.className = `price-change ${isPositive ? 'positive' : 'negative'}`;
        priceChangeElement.innerHTML = `
            <i class="fas fa-arrow-${isPositive ? 'up' : 'down'}"></i>
            <span>${isPositive ? '+' : ''}${(change * 100).toFixed(2)}%</span>
        `;
    }, 10000); // Update every 10 seconds
}

// Initialize price simulation
updatePriceSimulation();

// Mobile touch optimizations
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .wallet-btn, .wallet-option');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.touches[0].clientX - rect.left - size / 2;
            const y = e.touches[0].clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// Performance optimizations
function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
        img.decoding = 'async';
    });
}

optimizeImages();

// Analytics simulation (for demonstration)
function trackEvent(eventName, data) {
    console.log('Analytics Event:', eventName, data);
    
    // In a real implementation, you would send this to your analytics service
    // Example: gtag('event', eventName, data);
}

// Track user interactions
previewBtn.addEventListener('click', () => trackEvent('nft_preview'));
purchaseBtn.addEventListener('click', () => trackEvent('purchase_attempt'));

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    showNotification('Something went wrong. Please try again.', 'error');
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
