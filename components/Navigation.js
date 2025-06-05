'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, ChefHat } from 'lucide-react'
import { categories } from '../data/products'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-sepia" />
            <span className="handwritten text-2xl text-dark-brown">
              Conscious Bakes
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-dark-brown hover:text-sepia transition-colors"
            >
              Home
            </Link>
            {categories.map(category => (
              <Link 
                key={category.id}
                href={`/${category.id}`}
                className="text-dark-brown hover:text-sepia transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <button 
              className="flex items-center space-x-2 text-dark-brown hover:text-sepia transition-colors"
              onClick={() => {/* Cart functionality will be added */}}
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm">Cart (0)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark-brown"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-dark-brown hover:text-sepia transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {categories.map(category => (
                <Link 
                  key={category.id}
                  href={`/${category.id}`}
                  className="text-dark-brown hover:text-sepia transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <button 
                className="flex items-center space-x-2 text-dark-brown hover:text-sepia transition-colors text-left"
                onClick={() => {/* Cart functionality will be added */}}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart (0)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
