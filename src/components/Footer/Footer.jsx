import React from 'react'
import List from '../common/List'



import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";

const Footer = () => {
    const contact = [
        {title : "address" , desc: "Melbourne, 121 King St, Australia"},
        {title : "phone" , desc: "toll free (123 456-7890)"},
        {title : "email" , desc: "mail@example.com"},
        {title : "WORKING DAYS/HOURS" , desc: "Mon - Sun / 9:00AM - 8:00PM"},
    ]

    const customerservice = [
        {list : "Help & FAQs"},
        {list : "Order Tracking"},
        {list : "Shipping & Delivery"},
        {list : "orders History"},  
        {list : "Advance Search"},
        {list : "Login"},
        {list : "Careers"},
        {list : "About Us"},
        {list : "Corporate Sales"},
    ]

    const tag = [
        {list : "jeans"},
        {list : "shoes"},
        {list : "bag"}, 
        {list : "jeasn"}, 
        {list : "classic"}, 
        {list : "black"}, 
        {list : "bag"}, 
        {list : "white"}, 
        {list : "bag"}, 
        {list : "bag"}, 
        {list : "shoes"}, 
        {list : "bag"}, 
        {list : "jeas"}, 
        {list : "shoes"}, 
        {list : "white"}, 
        {list : "black"}, 
        {list : "white"}, 
        {list : "shoes"}, 
           ]
  return (
    <div className='mt-[100px] bg-[#212529]'>
        <div className="container">
            <div className="grid grid-cols-4 py-[52px]">


                {/* contact info */}
                <div className="flex flex-col gap-3 ">
                    <h3 className=' uppercase text-white text-[18px] font-semibold  '>contact info</h3>
                    {contact.map((item , index) => (
                    <div className="  " key={index}>
                        <h5 className='text-white uppercase text-[14px]  '>{item.title}</h5>
                        <span className=' text-quaternary text-[14px]  '    >{item.desc}</span>
                    </div>
                    ))}
                </div>


                {/* customer service */}
                <div className="flex flex-col gap-3 ">
                    <h3 className=' uppercase text-white text-[18px] font-semibold  '>popular tags</h3>
                    <List lists={customerservice} stylebx={"flex flex-col gap-1 " } stylels={"text-quaternary text-[14px] hover:text-white " } islink={"#"} />
                </div>

                {/* customer service */}
                <div className="flex flex-col gap-3 ">
                    <h3 className=' uppercase text-white text-[18px] font-semibold  '>customer service</h3>
                    <List lists={tag} stylebx={"flex flex-wrap w-[90%] gap-3 " } stylels={"text-quaternary text-[14px] border border-white w-fit py-1 px-2 rounded-md hover:text-white " } islink={"#"} />
                </div>

                {/* newsletter */}
                <div className="flex flex-col gap-3 ">
                    <h3 className=' uppercase text-white text-[18px] font-semibold  '>subscribe newsletter</h3>
                    <p className=' text-quaternary text-[14px]  '>Get all the latest information on events, sales and offers. Sign up for newsletter:</p>

                    <div className="">
                        <input type="text" name="newsletter" id="newsletter" placeholder="Email Address"  className='   w-full py-2 px-3 outline-none rounded-[20px] text-white/90  bg-quaternary/20   '/>
                        <button type="button" className='  py-2 px-6 outline-none rounded-[20px] text-white  bg-brand  uppercase mt-5  '  >subscribe</button>
                    </div>

                </div>
            </div>
            <hr  className=' bg-white opacity-[.5]  '/>
            <div className="flex justify-between ">
                <p className="text-quaternary text-[12px] py-5 ">Porto Template © 2025. All Rights Reserved</p>
                <List lists={[{list : <FaCcVisa />},{list : <FaCcPaypal />},{list : <FaCcStripe />},{list : <FaCcMastercard />} , {list : <FaApplePay />}]} stylebx={"flex gap-1 md:gap-6   "} stylels={"hover:text-white py-4 text-3xl text-quaternary " }  />
            </div>
        </div>
    </div>
  )
}

export default Footer