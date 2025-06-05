'use client'

import { categories } from '../data/products'
import CategoryCard from '../components/CategoryCard'
import { ChefHat, Heart, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-vintage to-cream py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <ChefHat className="w-16 h-16 mx-auto text-sepia mb-4" />
            <h1 className="handwritten text-6xl md:text-8xl text-dark-brown mb-4">
              Conscious Bakes
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Artisan desserts crafted with love, tradition, and the finest ingredients
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sepia mb-8">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Made with Love</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span className="text-sm">Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <ChefHat className="w-5 h-5" />
              <span className="text-sm">Artisan Crafted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="handwritten text-4xl md:text-5xl text-dark-brown mb-4">
              Our Signature Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each category represents years of perfecting recipes and techniques, 
              bringing you desserts that tell a story with every bite.
            </p>
          </div>
          
          <div className="category-grid">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-vintage py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="handwritten text-4xl text-dark-brown mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Conscious Bakes, every dessert is a labor of love. We believe in using only the finest ingredients, 
            time-honored techniques, and a touch of creativity to bring you desserts that not only taste incredible 
            but also create lasting memories. From our classic New York cheesecakes to our authentic Italian tiramisu, 
            each creation is handcrafted with attention to detail that you can taste.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-sepia rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Made Fresh Daily</h3>
              <p className="text-gray-600">Every item is prepared fresh to order using premium ingredients</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Authentic Recipes</h3>
              <p className="text-gray-600">Traditional techniques passed down through generations</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-sepia rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Artisan Quality</h3>
              <p className="text-gray-600">Handcrafted with precision and passion for perfection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
