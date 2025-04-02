import React from 'react'




// icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import List from '../common/List';

const HeaderTop = () => {
   
  const headertoplist = [
    {list : "About"},
    {list : "Our Stores"},
    {list : "Blog"},
    {list : "Contact"},
    {list : "Help & FAQs"},
    {list : "Track Order"},
  ]

  const headersocial = [ 
    {list : <FaFacebookF />},
    {list : <FaXTwitter />},
    {list : <FaLinkedinIn />}
   ]

  return (
    <div className=" py-2 text-xs">
      <div className="container ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Shipping info */}
          <div className="mb-2 ml-6 md:mb-0">
            <span className="font-semibold text-primary/80 text-[11px]   ">FREE RETURNS, STANDARD SHIPPING ORDERS $99+</span>
          </div>

          {/* Right side - Navigation links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 font-semibold text-primary/80   ">
          <List lists={headertoplist} stylebx={"border-r-2 border-quaternary/20  flex gap-4 md:gap-6 pr-4  " } stylels={"hover:text-gray-600" } islink={"#"} />
            
            <div className="relative group border-r-2 border-quaternary/20 pr-4 outline-0 ">
            {/* Currency selector */}
              <select name="currency" id="currency" className=' border-0 outline-0  '>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
              {/* Language selector */}
              <select name="lang" id="lang" className=' border-0 outline-0 ml-4 '>
                <option value="USD">ENG</option>
                <option value="EUR">BN</option>
              </select>
            </div>

            {/* social media */}
            <List stylebx={'flex gap-4'} islink={'#'}  lists={headersocial} />
          </div>
        </div>
      </div>
      <hr  className=' mt-4 bg-quaternary opacity-[.08] '/>
    </div>
  )
}

export default HeaderTop