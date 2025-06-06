import React from 'react';
import ProductCard from './ProductCard';

const CategoryPage = ({ category, products, onAddToCart, onProductClick }) => {
  const categoryData = {
    'birthday-cakes': {
      title: 'Birthday Cakes',
      subtitle: 'Make every celebration special with our custom birthday cakes',
      description: 'From classic chocolate to vibrant rainbow layers, our birthday cakes are crafted to make your special day unforgettable.',
      heroImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=400&fit=crop',
      bgColor: 'linear-gradient(135deg, #FFE4E6 0%, #FFF0F5 100%)'
    },
    'desserts': {
      title: 'Desserts',
      subtitle: 'Indulgent desserts to satisfy your sweet cravings',
      description: 'From creamy tiramisu to rich chocolate mousse, our desserts are the perfect ending to any meal.',
      heroImage: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&h=400&fit=crop',
      bgColor: 'linear-gradient(135deg, #F0E6FF 0%, #FAF0FF 100%)'
    },
    'savoury': {
      title: 'Savoury',
      subtitle: 'Delicious savoury treats for any time of day',
      description: 'Crispy puffs, flaky samosas, and hearty rolls - perfect for a quick bite or light meal.',
      heroImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=400&fit=crop',
      bgColor: 'linear-gradient(135deg, #FFF4E6 0%, #FFFAF0 100%)'
    },
    'bread': {
      title: 'Bread',
      subtitle: 'Freshly baked artisan breads made daily',
      description: 'From crusty sourdough to soft whole wheat, our breads are baked fresh every morning using traditional methods.',
      heroImage: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&h=400&fit=crop',
      bgColor: 'linear-gradient(135deg, #F5F0E6 0%, #FAF7F0 100%)'
    }
  };

  const currentCategory = categoryData[category];
  const filteredProducts = products.filter(product => product.category === category);

  if (!currentCategory) {
    return null;
  }

  return (
    <div className="category-page">
      {/* Hero Banner */}
      <div 
        className="category-hero"
        style={{ background: currentCategory.bgColor }}
      >
        <div className="container">
          <div className="category-hero-content">
            <div className="category-hero-text">
              <h1>{currentCategory.title}</h1>
              <p className="category-subtitle">{currentCategory.subtitle}</p>
              <p className="category-description">{currentCategory.description}</p>
              <div className="category-stats">
                <span className="product-count">{filteredProducts.length} Products Available</span>
                <span className="fresh-badge">🌸 Freshly Made Daily</span>
              </div>
            </div>
            <div className="category-hero-image">
              <img src={currentCategory.heroImage} alt={currentCategory.title} />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="category-products">
        <div className="container">
          <div className="category-products-header">
            <h2>Our {currentCategory.title}</h2>
            <p>Handcrafted with love and the finest ingredients</p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onProductClick={onProductClick}
                />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>No products available in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
