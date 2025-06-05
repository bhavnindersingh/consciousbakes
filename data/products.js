export const categories = [
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    description: 'Rich, creamy, and absolutely divine',
    image: '/images/categories/cheesecake-category.jpg',
    color: 'bg-gradient-to-br from-yellow-100 to-orange-100'
  },
  {
    id: 'tres-leches',
    name: 'Tres Leches',
    description: 'Three milks of pure heaven',
    image: '/images/categories/tres-leches-category.jpg',
    color: 'bg-gradient-to-br from-blue-100 to-indigo-100'
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    description: 'Italian elegance in every bite',
    image: '/images/categories/tiramisu-category.jpg',
    color: 'bg-gradient-to-br from-green-100 to-emerald-100'
  },
  {
    id: 'puff-pastry',
    name: 'Puff Pastry',
    description: 'Flaky, buttery perfection',
    image: '/images/categories/puff-pastry-category.jpg',
    color: 'bg-gradient-to-br from-pink-100 to-rose-100'
  }
];

export const products = {
  'cheesecake': [
    {
      id: 'classic-ny-cheesecake',
      name: 'Classic New York Cheesecake',
      description: 'The original and the best. Rich, dense, and creamy with a graham cracker crust.',
      price: '$45',
      image: '/images/products/classic-ny-cheesecake.jpg',
      features: ['Graham cracker crust', 'Philadelphia cream cheese', 'Serves 8-10']
    },
    {
      id: 'strawberry-cheesecake',
      name: 'Fresh Strawberry Cheesecake',
      description: 'Classic cheesecake topped with fresh strawberry compote and glazed berries.',
      price: '$50',
      image: '/images/products/strawberry-cheesecake.jpg',
      features: ['Fresh strawberries', 'Strawberry compote', 'Serves 8-10']
    },
    {
      id: 'chocolate-cheesecake',
      name: 'Decadent Chocolate Cheesecake',
      description: 'Rich chocolate cheesecake with chocolate ganache and chocolate cookie crust.',
      price: '$48',
      image: '/images/products/chocolate-cheesecake.jpg',
      features: ['Chocolate ganache', 'Oreo cookie crust', 'Serves 8-10']
    },
    {
      id: 'blueberry-cheesecake',
      name: 'Blueberry Swirl Cheesecake',
      description: 'Creamy cheesecake with blueberry swirl and fresh blueberry topping.',
      price: '$50',
      image: '/images/products/blueberry-cheesecake.jpg',
      features: ['Fresh blueberries', 'Blueberry swirl', 'Serves 8-10']
    }
  ],
  'tres-leches': [
    {
      id: 'traditional-tres-leches',
      name: 'Traditional Tres Leches',
      description: 'Classic sponge cake soaked in three milks with cinnamon and vanilla.',
      price: '$35',
      image: '/images/products/traditional-tres-leches.jpg',
      features: ['Three milk blend', 'Cinnamon dusting', 'Serves 8-10']
    },
    {
      id: 'coconut-tres-leches',
      name: 'Coconut Tres Leches',
      description: 'Tropical twist with coconut milk and toasted coconut flakes.',
      price: '$38',
      image: '/images/products/coconut-tres-leches.jpg',
      features: ['Coconut milk', 'Toasted coconut', 'Serves 8-10']
    },
    {
      id: 'chocolate-tres-leches',
      name: 'Chocolate Tres Leches',
      description: 'Rich chocolate sponge soaked in chocolate-infused three milks.',
      price: '$40',
      image: '/images/products/chocolate-tres-leches.jpg',
      features: ['Chocolate sponge', 'Chocolate milk blend', 'Serves 8-10']
    },
    {
      id: 'dulce-tres-leches',
      name: 'Dulce de Leche Tres Leches',
      description: 'Caramel lovers dream with dulce de leche swirl and caramel drizzle.',
      price: '$42',
      image: '/images/products/dulce-tres-leches.jpg',
      features: ['Dulce de leche', 'Caramel drizzle', 'Serves 8-10']
    }
  ],
  'tiramisu': [
    {
      id: 'classic-tiramisu',
      name: 'Classic Italian Tiramisu',
      description: 'Traditional recipe with ladyfingers, espresso, mascarpone, and cocoa.',
      price: '$40',
      image: '/images/products/classic-tiramisu.jpg',
      features: ['Fresh mascarpone', 'Strong espresso', 'Serves 6-8']
    },
    {
      id: 'berry-tiramisu',
      name: 'Mixed Berry Tiramisu',
      description: 'Fresh twist with mixed berries and berry-infused mascarpone.',
      price: '$45',
      image: '/images/products/berry-tiramisu.jpg',
      features: ['Mixed fresh berries', 'Berry mascarpone', 'Serves 6-8']
    },
    {
      id: 'amaretto-tiramisu',
      name: 'Amaretto Tiramisu',
      description: 'Sophisticated version with amaretto liqueur and almond flavors.',
      price: '$48',
      image: '/images/products/amaretto-tiramisu.jpg',
      features: ['Amaretto liqueur', 'Almond essence', 'Serves 6-8']
    },
    {
      id: 'white-chocolate-tiramisu',
      name: 'White Chocolate Tiramisu',
      description: 'Elegant white chocolate version with white chocolate shavings.',
      price: '$50',
      image: '/images/products/white-chocolate-tiramisu.jpg',
      features: ['White chocolate', 'Chocolate shavings', 'Serves 6-8']
    }
  ],
  'puff-pastry': [
    {
      id: 'classic-cream-puffs',
      name: 'Classic Cream Puffs',
      description: 'Light and airy choux pastry filled with vanilla pastry cream.',
      price: '$25',
      image: '/images/products/classic-cream-puffs.jpg',
      features: ['Vanilla pastry cream', 'Choux pastry', '12 pieces']
    },
    {
      id: 'chocolate-eclairs',
      name: 'Chocolate Éclairs',
      description: 'Elegant éclairs filled with chocolate cream and glazed with chocolate.',
      price: '$30',
      image: '/images/products/chocolate-eclairs.jpg',
      features: ['Chocolate cream', 'Chocolate glaze', '8 pieces']
    },
    {
      id: 'napoleon-cake',
      name: 'Napoleon Mille-feuille',
      description: 'Layers of flaky puff pastry with vanilla custard and fondant icing.',
      price: '$55',
      image: '/images/products/napoleon-cake.jpg',
      features: ['Multiple layers', 'Vanilla custard', 'Serves 8-10']
    },
    {
      id: 'fruit-tarts',
      name: 'Seasonal Fruit Tarts',
      description: 'Individual puff pastry tarts with pastry cream and seasonal fruits.',
      price: '$35',
      image: '/images/products/fruit-tarts.jpg',
      features: ['Seasonal fruits', 'Pastry cream', '6 individual tarts']
    },
    {
      id: 'palmiers',
      name: 'Caramelized Palmiers',
      description: 'Butterfly-shaped pastries with caramelized sugar and butter.',
      price: '$20',
      image: '/images/products/palmiers.jpg',
      features: ['Caramelized sugar', 'Buttery layers', '15 pieces']
    }
  ]
};
