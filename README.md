# Real Estate NFT Purchase Preview

A modern, mobile-friendly static page for previewing and purchasing tokenized real estate NFTs. Built with vanilla HTML, CSS, and JavaScript for deployment on GitHub Pages.

## 🏠 Features

- **Mobile-First Design**: Fully responsive layout that works perfectly on all devices
- **Wallet Integration**: Simulated wallet connection with MetaMask, WalletConnect, and Coinbase Wallet
- **Interactive UI**: Smooth animations, hover effects, and touch-optimized interactions
- **NFT Preview**: Detailed property information with NFT metadata display
- **Transaction Simulation**: Complete purchase flow with loading states and success modals
- **Real-time Price Updates**: Simulated price changes with percentage indicators
- **Accessibility**: Keyboard navigation, focus states, and screen reader support

## 🚀 Live Demo

Deployed on GitHub Pages: `https://davidfernandez.github.io/wallet-connect-transaction-preview`

## 📱 Mobile Experience

The page is optimized for mobile devices with:
- Touch-friendly buttons and interactions
- Responsive typography and spacing
- Optimized images with lazy loading
- Smooth scrolling and gestures
- Adaptive layout for all screen sizes

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with custom properties, Grid, and Flexbox
- **Vanilla JavaScript**: No frameworks required for optimal performance
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Inter font family for modern typography
- **Unsplash API**: High-quality property images

## 📁 Project Structure

```
wallet-connect-transaction-preview/
├── index.html          # Main HTML file
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
├── _config.yml         # GitHub Pages configuration
├── .nojekyll           # Bypass Jekyll processing
└── README.md           # This file
```

## 🎨 Design Features

### Visual Elements
- Gradient backgrounds and glassmorphism effects
- Card-based layout with subtle shadows
- Color-coded price indicators
- Verified badges and status indicators
- Smooth transitions and micro-interactions

### User Interface
- Clean, modern design with Inter font
- Consistent spacing and visual hierarchy
- Intuitive navigation and action buttons
- Modal dialogs for wallet connection and purchase confirmation
- Toast notifications for user feedback

## 🔧 Customization

### Updating Property Information
Edit the property details in `index.html`:
```html
<h1 class="property-title">Your Property Title</h1>
<div class="property-location">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your Location</span>
</div>
```

### Modifying NFT Details
Update NFT information in the `nft-info` section:
```html
<div class="detail-item">
    <span class="label">Token ID</span>
    <span class="value">#YOUR-TOKEN-ID</span>
</div>
```

### Changing Price Information
Update pricing in the `pricing-section`:
```html
<span class="eth-price">2.5 ETH</span>
<span class="usd-price">$4,125.00</span>
```

### Customizing Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #22d3ee;
    --success-color: #10b981;
    /* Add more color variables */
}
```

## 🚀 Deployment

### GitHub Pages Setup

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "GitHub Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access Your Site**:
   Your site will be available at: `https://username.github.io/wallet-connect-transaction-preview`

### Custom Domain (Optional)

1. Add a `CNAME` file with your domain:
   ```
   yourdomain.com
   ```

2. Update DNS settings with GitHub Pages IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

## 🔍 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 7+)

## 🌐 SEO Optimization

- Semantic HTML5 structure
- Meta tags for social sharing
- Proper heading hierarchy
- Image alt attributes
- Fast loading with optimized assets
- Mobile-friendly responsive design

## 📊 Performance

- **Page Speed**: Optimized for fast loading
- **Image Optimization**: Lazy loading and modern formats
- **Minimal Dependencies**: No heavy frameworks
- **Efficient CSS**: Optimized stylesheets
- **Compressed Assets**: Ready for production

## 🔐 Security Considerations

- No external API calls for core functionality
- Safe wallet connection simulation
- HTTPS ready for production
- Content Security Policy friendly
- XSS protection with proper sanitization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include browser and device information for bugs

## 🔄 Future Enhancements

- [ ] Real blockchain integration
- [ ] Multiple property listings
- [ ] User authentication
- [ ] Transaction history
- [ ] Property analytics
- [ ] Virtual property tours
- [ ] Multi-language support
- [ ] Dark mode toggle

---

**Built with ❤️ for the Web3 and real estate tokenization community**
