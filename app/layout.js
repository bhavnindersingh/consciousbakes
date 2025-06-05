import './globals.css'
import Navigation from '../components/Navigation'
import Cart from '../components/Cart'

export const metadata = {
  title: 'Conscious Bakes - Artisan Desserts',
  description: 'Handcrafted cheesecakes, tres leches, tiramisu, and puff pastries made with love',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Cart />
        <footer className="bg-dark-brown text-cream py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h3 className="handwritten text-2xl mb-4">Conscious Bakes</h3>
            <p className="text-sm opacity-80">Made with love, served with pride</p>
            <p className="text-xs opacity-60 mt-2">© 2024 Conscious Bakes. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
