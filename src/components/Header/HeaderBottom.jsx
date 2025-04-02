import { useState } from "react";



// icons
import { GoSearch } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { SlUser } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";

// logo
import logo from "../../assets/logo.png";
export default function HeaderBottom() {
  const [cartCount, setCartCount] = useState(1);

  return (
    <div >
      <div className="container">
        <div className="flex items-center gap-[71px] justify-between px-6 py-3 bg-white ">
          {/* Logo */}
          <img src={logo} alt="logo" className="w-[100px]" />

          {/* Search Bar */}
          <div className="flex items-center bg-primary/5 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 outline-none text-quaternary "
            />
            <select className="px-4 py-2 border-l-2 border-secondary outline-none bg-gray-100 text-quaternary  " >
              <option value={"All"}>All Categories</option>
              <option value={"Fashon"}>Fashon</option>
              <option value={"Electronics"}>Electronics</option>
              <option value={"Home"}>Home & Garden</option>
              <option value={"Motors"}>Motors</option>
              <option value={"Features"}>Features</option>
            </select>
            <button className="px-4 py-2 border-l-2 border-secondary">
              <GoSearch />
            </button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 ">
              <IoCallOutline className=" text-3xl   " />
              <div className="flex flex-col font-extrabold text-[11px] leading-[13px] text-quaternary   ">
                <span className="uppercase">Call Us now</span>
                <span className="text-sm font-semibold text-primary  ">+123 4567 890</span>
              </div>
            </div>
            <SlUser className="w-6 h-6 cursor-pointer" />
            <IoIosHeartEmpty className="w-6 h-6 cursor-pointer" />
            <div className="relative">
              <BsHandbag className="w-6 h-6 cursor-pointer" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
