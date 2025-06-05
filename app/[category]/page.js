'use client'

import { products, categories } from '../../data/products'
import ProductCard from '../../components/ProductCard'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.id,
  }))
}
export default function CategoryPage({ params }) {
  const { category } = params
  const categoryData = categories.find(cat => cat.id === category)
  const categoryProducts = products[category]

  if (!categoryData || !categoryProducts) {
    notFound()
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center space-x-2 text-sepia hover:text-opacity-80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Categories</span>
        </Link>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className={`w-32 h-32 mx-auto mb-6 rounded-full ${categoryData.color} flex items-center justify-center`}>
            <span className="text-4xl">🍰</span>
          </div>
          <h1 className="handwritten text-5xl md:text-6xl text-dark-brown mb-4">
            {categoryData.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {categoryData.description}
          </p>
          <div className="mt-6 text-sm text-gray-500">
            {categoryProducts.length} delicious varieties available
          </div>
        </div>

        {/* Products Grid */}
        <div className="product-grid">
          {categoryProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Category Info */}
        <div className="mt-16 bg-vintage rounded-lg p-8 text-center">
          <h2 className="handwritten text-3xl text-dark-brown mb-4">
            Why Choose Our {categoryData.name}?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {getCategoryDescription(category)}
          </p>
        </div>
      </div>
    </div>
  )
}

function getCategoryDescription(category) {
  const descriptions = {
    'cheesecake': 'Our cheesecakes are made with premium Philadelphia cream cheese, farm-fresh eggs, and real vanilla. Each cake is baked slowly at low temperature to achieve that perfect creamy texture, then chilled overnight to develop the rich, dense consistency that makes our cheesecakes unforgettable.',
    'tres-leches': 'Authentic tres leches made the traditional way - light sponge cake soaked in a blend of three milks: evaporated milk, condensed milk, and heavy cream. Each cake is allowed to absorb the milk mixture overnight, creating that signature moist, tender texture that melts in your mouth.',
    'tiramisu': 'Our tiramisu follows the authentic Italian recipe using fresh mascarpone cheese, strong espresso, and delicate ladyfinger cookies. Each layer is carefully assembled and chilled for the perfect balance of coffee, cream, and cocoa - just like you would find in the cafes of Rome.',
    'puff-pastry': 'Made with traditional French techniques, our puff pastry is created through a meticulous process of folding butter into dough multiple times to create hundreds of flaky layers. The result is incredibly light, buttery pastries that showcase the art of classical French patisserie.'
  }
  return descriptions[category] || 'Crafted with traditional techniques and premium ingredients for an exceptional taste experience.'
}
