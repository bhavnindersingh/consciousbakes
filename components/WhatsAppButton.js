'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ cartItems = [], className = '' }) {
  const phoneNumber = '+1234567890' // Replace with your actual WhatsApp number
  
  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) {
      return 'Hello! I would like to inquire about your desserts.'
    }
    
    let message = 'Hello! I would like to order the following items:\n\n'
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.price}\n`
      if (item.quantity > 1) {
        message += `   Quantity: ${item.quantity}\n`
      }
      message += '\n'
    })
    
    message += 'Please let me know the total cost and availability. Thank you!'
    
    return message
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(generateWhatsAppMessage())
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`btn-primary flex items-center space-x-2 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Order via WhatsApp</span>
    </button>
  )
}
