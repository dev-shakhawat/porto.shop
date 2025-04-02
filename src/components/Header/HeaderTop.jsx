import React from 'react'



const HeaderTop = () => {
  return (
    <div className="bg-gray-100 py-2 text-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Shipping info */}
          <div className="mb-2 md:mb-0">
            <span className="font-medium">FREE RETURNS, STANDARD SHIPPING ORDERS $99+</span>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-gray-600">About</a>
            <a href="#" className="hover:text-gray-600">Our Stores</a>
            <a href="#" className="hover:text-gray-600">Blog</a>
            <a href="#" className="hover:text-gray-600">Contact</a>
            <a href="#" className="hover:text-gray-600">Help & FAQs</a>
            <a href="#" className="hover:text-gray-600">Track Order</a>
            
            {/* Currency selector */}
            <div className="relative group">
              <button className="flex items-center hover:text-gray-600">
                USD 
              </button>
              <div className="absolute right-0 hidden group-hover:block bg-white shadow-md z-10 min-w-[120px]">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">USD</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">EUR</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">GBP</a>
              </div>
            </div>

            {/* Language selector */}
            <div className="relative group">
              <button className="flex items-center hover:text-gray-600">
                ENG 
              </button>
              <div className="absolute right-0 hidden group-hover:block bg-white shadow-md z-10 min-w-[120px]">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">ENG</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">ESP</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">FRA</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop