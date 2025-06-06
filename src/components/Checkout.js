import React, { useState } from 'react';
import { sendToWhatsApp } from '../utils/whatsapp';

const Checkout = ({ isOpen, onClose, cartItems, onOrderComplete }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!customerInfo.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!customerInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!customerInfo.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Send order to WhatsApp
      sendToWhatsApp(cartItems, customerInfo);
      
      // Clear cart and close checkout
      onOrderComplete();
      onClose();
      
      // Show success message
      alert('Order sent to WhatsApp! We will contact you shortly to confirm your order.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="checkout-overlay">
      <div className="checkout-modal">
        <div className="checkout-header">
          <h2>Checkout</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="checkout-content">
          <div className="checkout-sections">
            {/* Order Summary */}
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-items">
                {cartItems.map(item => (
                  <div key={item.id} className="summary-item">
                    <span>{item.name} × {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="summary-total">
                <strong>Total: ${total.toFixed(2)}</strong>
              </div>
            </div>

            {/* Customer Information Form */}
            <div className="customer-form">
              <h3>Customer Information</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="address">Delivery Address *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    rows="3"
                    className={errors.address ? 'error' : ''}
                  ></textarea>
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Special Instructions (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={customerInfo.notes}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="Any special requests or delivery instructions..."
                  ></textarea>
                </div>

                <div className="checkout-actions">
                  <button type="submit" className="place-order-btn">
                    <i className="fab fa-whatsapp"></i>
                    Send Order via WhatsApp
                  </button>
                  <button type="button" className="cancel-btn" onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="whatsapp-info">
            <div className="info-box">
              <i className="fab fa-whatsapp"></i>
              <div>
                <h4>WhatsApp Ordering</h4>
                <p>Your order details will be sent via WhatsApp. We'll contact you to confirm availability and arrange delivery or pickup.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
