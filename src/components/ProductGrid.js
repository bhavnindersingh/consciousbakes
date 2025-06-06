import React from 'react';
import ProductCard from './ProductCard';
import CategoryPage from './CategoryPage';

const ProductGrid = ({ products, onAddToCart, selectedCategory, onProductClick, onCategoryChange }) => {
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const bestSellers = products.filter(product => product.bestseller);

  // If a specific category is selected, show the category page
  if (selectedCategory !== 'all') {
    return (
      <CategoryPage
        category={selectedCategory}
        products={products}
        onAddToCart={onAddToCart}
        onProductClick={onProductClick}
      />
    );
  }

  return (
    <div className="product-section">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>ConsciousBakes.com</h1>
            <p>Explore our range of premium artisanal baked goods made with love and conscious ingredients</p>
            <button className="cta-btn">Shop All</button>
          </div>
          
          <div className="hero-categories">
            <div className="category-card" onClick={() => onCategoryChange('birthday-cakes')}>
              <div className="category-icon">🎂</div>
              <h3>Birthday Cakes</h3>
              <p>Shop Birthday Cakes</p>
            </div>
            <div className="category-card" onClick={() => onCategoryChange('desserts')}>
              <div className="category-icon">🍰</div>
              <h3>Desserts</h3>
              <p>Shop Desserts</p>
            </div>
            <div className="category-card" onClick={() => onCategoryChange('savoury')}>
              <div className="category-icon">🥪</div>
              <h3>Savoury</h3>
              <p>Shop Savoury</p>
            </div>
            <div className="category-card" onClick={() => onCategoryChange('bread')}>
              <div className="category-icon">🍞</div>
              <h3>Bread</h3>
              <p>Shop Bread</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="best-sellers">
        <div className="container">
          <h2>Discover our best-sellers</h2>
          <p>We've been crafting premium baked goods for years, with our range of high quality cakes, desserts, and artisanal breads.</p>
          
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

      {/* All Products Section */}
      <section className="all-products">
        <div className="container">
          <h2>All Products</h2>
          
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
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>For over 10 years we've been creating baked goods that inspire joy, crafted with consciousness in mind.</h2>
            <button className="learn-more-btn">Learn more about our story</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductGrid;
