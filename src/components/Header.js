import React, { useState } from 'react';

const Header = ({ cartItems, onCartToggle, onCategoryChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'breads', name: 'Breads' },
    { id: 'cookies', name: 'Cookies' },
    { id: 'cupcakes', name: 'Cupcakes' }
  ];

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="currency-selector">
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="currency-select"
              >
                <option value="USD">$ USD</option>
                <option value="EUR">€ EUR</option>
                <option value="GBP">£ GBP</option>
              </select>
            </div>
            <div className="header-actions">
              <button className="cart-btn" onClick={onCartToggle}>
                <i className="fas fa-shopping-bag"></i>
                <span className="cart-count">{cartItemCount}</span>
                <span className="cart-total">${cartTotal.toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>Conscious Bakes</h1>
              <span className="tagline">Premium Artisanal Bakery</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <div className="nav-section">
                <span className="nav-title">Shop</span>
                <div className="nav-dropdown">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => onCategoryChange(category.id)}
                      className="nav-item"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="nav-section">
                <span className="nav-title">Featured</span>
                <div className="nav-dropdown">
                  <button className="nav-item">Best Sellers</button>
                  <button className="nav-item">New Arrivals</button>
                  <button className="nav-item">Special Occasions</button>
                </div>
              </div>
              <div className="nav-section">
                <span className="nav-title">Price</span>
                <div className="nav-dropdown">
                  <button className="nav-item">Under $10</button>
                  <button className="nav-item">Under $25</button>
                  <button className="nav-item">Under $50</button>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="container">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setIsMenuOpen(false);
                }}
                className="mobile-nav-item"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
