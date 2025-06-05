'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function CategoryCard({ category, index }) {
  const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2']
  const rotation = rotations[index % rotations.length]

  return (
    <Link href={`/${category.id}`}>
      <div className={`polaroid-card ${rotation} cursor-pointer group`}>
        {/* Image placeholder with gradient background */}
        <div className={`polaroid-image ${category.color} flex items-center justify-center relative overflow-hidden`}>
          {/* Placeholder for actual image */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="text-6xl opacity-60">
            {getCategoryEmoji(category.id)}
          </div>
          {/* You can replace this with actual Image component when you have real photos */}
          {/* <Image 
            src={category.image} 
            alt={category.name}
            fill
            className="object-cover"
          /> */}
        </div>
        
        {/* Polaroid Caption */}
        <div className="text-center">
          <h3 className="handwritten text-2xl text-dark-brown mb-2">
            {category.name}
          </h3>
          <p className="polaroid-caption">
            {category.description}
          </p>
        </div>
        
        {/* Hover Effect */}
        <div className="absolute inset-0 bg-sepia/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>
    </Link>
  )
}

function getCategoryEmoji(categoryId) {
  const emojis = {
    'cheesecake': '🍰',
    'tres-leches': '🥛',
    'tiramisu': '☕',
    'puff-pastry': '🥐'
  }
  return emojis[categoryId] || '🍰'
}
