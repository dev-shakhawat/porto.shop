import React from 'react'

const ProductCard = ({ image ,  newproduct , off , catagory , porductname , delprice , currentprice}) => {
  return (
    <div className='cursor-pointer'>
        <div className="relative group overflow-hidden ">
            <img src={image} alt="image" />
            <div className="absolute top-4 left-4 right-0 w-fit h-fit  ">
               {newproduct && <div className=' uppercase bg-green-600 text-white text-[10px] font-semibold py-1 px-2  '>New</div>}
               {off && <div className=' uppercase bg-red-600 text-white text-[10px] font-semibold py-1 px-2 mt-2 '>-{off }% off </div>}
            </div>
            <div className="absolute bottom-[-100] group-hover:bottom-0 transition-all duration-500 ease-in  right-0 w-full h-fit bg-brand uppercase text-center py-4 font-medium text-white ">quick view</div>
        </div>
        <span className="uppercase text-[10px] leading-[10px] text-quaternary   ">{catagory}</span>
        <h4 className=" font-medium text-base leading-[20px] text-primary capitalize  ">{porductname}</h4>
        <h3 className=' font-medium  '>
            <del className=' text-quaternary   '> ${delprice}</del>
            <span className=' font-semibold text-primary  '> ${currentprice}</span>
        </h3>
    </div>
  )
}

export default ProductCard