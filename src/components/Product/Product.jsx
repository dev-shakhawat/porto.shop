import React from "react";

import ProductCard from "../common/ProductCard";

import product1 from "../../assets/product-1.jpg";
import product2 from "../../assets/product-2.jpg";
import product3 from "../../assets/product-3.jpg";
import product4 from "../../assets/product-4.jpg";
import product5 from "../../assets/product-5.jpg";
import product6 from "../../assets/product-6.jpg";
import product7 from "../../assets/product-7.jpg";
import product8 from "../../assets/product-8.jpg";

const Product = () => {
  const productDetails = [
    {
      image: product1,
      name: "photo camera",
      delprice: "59,00",
      currentprice: "69,00",
      newproduct: true,
      off: false,
      catagory: "electronics",
    },
    {
      image: product2,
      name: "Porto Headphone",
      delprice: "99,00",
      currentprice: "199,00",
      newproduct: true,
      off: 27,
      catagory: "accessories",
    },
    {
      image: product3,
      name: "Golf Bag",
      delprice: "19,00",
      currentprice: "29,00",
      newproduct: false,
      off: false,
      catagory: "accessories",
    },
    {
      image: product4,
      name: "Workout",
      delprice: "30,00",
      currentprice: "40,00",
      newproduct: false,
      off: 27,
      catagory: "sports",
    },
    {
      image: product5,
      name: "Luxury Bag",
      delprice: "79,00",
      currentprice: "99,00",
      newproduct: false,
      off: false,
      catagory: "accessories",
    },
    {
      image: product6,
      name: "Styled Bag",
      delprice: "119,00",
      currentprice: "199,00",
      newproduct: false,
      off: false,
      catagory: "accessories",
    },
    {
      image: product7,
      name: "blue hat",
      delprice: "289,00",
      currentprice: "299,00",
      newproduct: false,
      off: false,
      catagory: "hat",
    },
    {
      image: product8,
      name: "Adventurer Bag",
      delprice: "79,00",
      currentprice: "99,00",
      newproduct: false,
      off: false,
      catagory: "accessories",
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4   ">
        {productDetails.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            newproduct={item.newproduct}
            off={item.off}
            catagory={item.catagory}
            porductname={item.name}
            delprice={item.delprice}
            currentprice={item.currentprice}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
