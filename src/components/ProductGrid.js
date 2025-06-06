import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onAddToCart, selectedCategory, onProductClick }) => {
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const bestSellers = products.filter(product => product.bestseller);

  return (
    <div className="product-section">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Where taste meets consciousness</h1>
            <p>Explore our range of premium artisanal baked goods made with love and conscious ingredients</p>
            <button className="cta-btn">Shop All</button>
          </div>
          
          <div className="hero-categories">
            <div className="category-card">
              <div className="category-icon">🎂</div>
              <h3>Cakes</h3>
              <p>Shop Cakes</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🥐</div>
              <h3>Pastries</h3>
              <p>Shop Pastries</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🍞</div>
              <h3>Breads</h3>
              <p>Shop Breads</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🍪</div>
              <h3>Cookies</h3>
              <p>Shop Cookies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      {selectedCategory === 'all' && (
        <section className="best-sellers">
          <div className="container">
            <h2>Discover our best-sellers</h2>
            <p>We've been crafting premium baked goods for years, with our range of high quality cakes, pastries, and artisanal breads.</p>
            
            <div className="products-grid">
              {bestSellers.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onProductClick={onProductClick}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products Section */}
      <section className="all-products">
        <div className="container">
          <h2>
            {selectedCategory === 'all' 
              ? 'All Products' 
              : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`
            }
          </h2>
          
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
        </div>
      </section>

      {/* About Section */}
      {selectedCategory === 'all' && (
        <section className="about-section">
          <div className="container">
            <div className="about-content">
              <h2>For over 10 years we've been creating baked goods that inspire joy, crafted with consciousness in mind.</h2>
              <button className="learn-more-btn">Learn more about our story</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductGrid;
