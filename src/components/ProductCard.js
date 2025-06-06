import React from 'react';

const ProductCard = ({ product, onAddToCart, onProductClick }) => {
  const handleCardClick = (e) => {
    // Don't open product page if clicking the add to cart button
    if (e.target.closest('.add-to-cart-btn')) {
      return;
    }
    onProductClick(product);
  };

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    // For cakes, open product page to select size
    if (product.category === 'cakes') {
      onProductClick(product);
    } else {
      // For other items, add directly to cart
      onAddToCart(product);
    }
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      {product.bestseller && (
        <div className="bestseller-badge">Best Seller</div>
      )}
      
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          ${product.price.toFixed(2)}
          {product.category === 'cakes' && <span className="from-price">from</span>}
        </div>
        
        <button 
          className="add-to-cart-btn"
          onClick={handleQuickAdd}
        >
          {product.category === 'cakes' ? 'Choose Size' : 'Add To Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
