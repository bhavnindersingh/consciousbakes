'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, Check } from 'lucide-react'

export default function ProductCard({ product, category, index }) {
  const [isAdded, setIsAdded] = useState(false)
  
  const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-0']
  const rotation = rotations[index % rotations.length]

  const handleAddToCart = () => {
    setIsAdded(true)
    // Add to cart logic will be implemented
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <div className={`polaroid-card ${rotation} group`}>
      {/* Product Image */}
      <div className="polaroid-image bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="text-4xl opacity-60">
          {getProductEmoji(category)}
        </div>
        {/* You can replace this with actual Image component when you have real photos */}
        {/* <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover"
        /> */}
      </div>
      
      {/* Product Info */}
      <div className="text-center">
        <h3 className="handwritten text-xl text-dark-brown mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">
          {product.description}
        </p>
        
        {/* Features */}
        <div className="mb-4">
          {product.features.map((feature, idx) => (
            <span 
              key={idx}
              className="inline-block bg-vintage text-xs px-2 py-1 rounded-full mr-1 mb-1 text-gray-700"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-sepia">
            {product.price}
          </span>
          <button 
            onClick={handleAddToCart}
            className={`btn-secondary flex items-center space-x-2 transition-all duration-300 ${
              isAdded ? 'bg-green-500 animate-pulse' : ''
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

function getProductEmoji(category) {
  const emojis = {
    'cheesecake': '🍰',
    'tres-leches': '🍰',
    'tiramisu': '🍮',
    'puff-pastry': '🥐'
  }
  return emojis[category] || '🍰'
}
