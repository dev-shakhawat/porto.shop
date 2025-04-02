import { useState } from "react";
import {
  FaShoppingBag,
  FaUser,
  FaHeart,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";


// logo
import logo from "../../assets/logo.png";
export default function HeaderBottom() {
  const [cartCount, setCartCount] = useState(1);

  return (
    <nav className="shadow-md">
      <div className="container">
        <div className="flex items-center gap-[71px] justify-between px-6 py-3 bg-white ">
          {/* Logo */}
          <img src={logo} alt="logo" className="w-[100px]" />

          {/* Search Bar */}
          <div className="flex items-center bg-primary/10 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 outline-none"
            />
            <select className="px-4 py-2 border-l outline-none bg-gray-100">
              <option>All Categories</option>
            </select>
            <button className="px-4 py-2 bg-gray-200">
              <FaSearch />
            </button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-700">
              <FaPhoneAlt className="w-5 h-5" />
              <span className="text-sm font-semibold">+123 4567 890</span>
            </div>
            <FaUser className="w-6 h-6 cursor-pointer" />
            <FaHeart className="w-6 h-6 cursor-pointer" />
            <div className="relative">
              <FaShoppingBag className="w-6 h-6 cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
