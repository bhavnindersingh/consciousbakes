# Conscious Bakes - Artisan Dessert Website

A beautiful, polaroid-style Next.js website showcasing artisan desserts with WhatsApp ordering integration.

## Features

- 🍰 **Category-based Product Showcase**: Cheesecake, Tres Leches, Tiramisu, and Puff Pastry
- 📸 **Polaroid-style Design**: Vintage aesthetic with rotating cards and handwritten fonts
- 📱 **Mobile-first Responsive Design**: Looks great on all devices
- 🛒 **Shopping Cart**: Add products and manage quantities
- 💬 **WhatsApp Integration**: Direct ordering through WhatsApp
- ⚡ **Static Site**: No backend required, fast loading
- 🎨 **Beautiful UI**: Custom Tailwind CSS with vintage color palette

## Product Categories

### Cheesecake
- Classic New York Cheesecake
- Fresh Strawberry Cheesecake  
- Decadent Chocolate Cheesecake
- Blueberry Swirl Cheesecake

### Tres Leches
- Traditional Tres Leches
- Coconut Tres Leches
- Chocolate Tres Leches
- Dulce de Leche Tres Leches

### Tiramisu
- Classic Italian Tiramisu
- Mixed Berry Tiramisu
- Amaretto Tiramisu
- White Chocolate Tiramisu

### Puff Pastry
- Classic Cream Puffs
- Chocolate Éclairs
- Napoleon Mille-feuille
- Seasonal Fruit Tarts
- Caramelized Palmiers

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates a static export in the `out` folder that can be deployed to any static hosting service.

## Customization

### Adding Your Images
1. Add your product photos to `/public/images/products/`
2. Add category photos to `/public/images/categories/`
3. Update the image paths in `/data/products.js`

### WhatsApp Configuration
Update the phone number in `/components/WhatsAppButton.js`:
```javascript
const phoneNumber = '+1234567890' // Replace with your WhatsApp number
```

### Updating Products
Edit `/data/products.js` to:
- Add new products
- Update prices
- Modify descriptions
- Change categories

### Styling
- Colors and fonts are defined in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind classes

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Static Deployment
1. Run `npm run build`
2. Upload the `out` folder to your hosting service

## File Structure

```
├── app/
│   ├── [category]/
│   │   └── page.js          # Category pages
│   ├── globals.css          # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage
├── components/
│   ├── Cart.js             # Shopping cart
│   ├── CategoryCard.js     # Category display cards
│   ├── Navigation.js       # Site navigation
│   ├── ProductCard.js      # Product display cards
│   └── WhatsAppButton.js   # WhatsApp integration
├── data/
│   └── products.js         # Product and category data
├── public/
│   └── images/            # Product and category images
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **WhatsApp API** - Direct messaging

## License

This project is private and proprietary to Conscious Bakes.

---

Made with ❤️ for Conscious Bakes
