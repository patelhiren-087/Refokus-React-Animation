import React, { useState } from "react";
import Product from "./Product";
import {motion} from "framer-motion";



function Products() {
  var products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learnimages game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "YYR 2022",
      description:
        "Our second year was filled with great events, excitimages projects, awards and amazimages people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Remind!",
      description:
        "Remind's new website was designed and developed to be easy to maintain and ready to learn, reflectimages their mission to connect students and families.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val*18);
  }

  return (
    <div className="mt-10 relative">
      {products.map((val, index) => (
        <Product val={val} mover={mover} count={index}/>
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none">
        <motion.div initial={{y: pos, x: "-50%"}} animate={{y: pos+`rem`}} className="window w-[32rem] h-[18rem] left-[48%] -translate-x-[50%] absolute overflow-hidden ">
          <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <img className="h-full w-full object-cover" src="/assets/productImages/1.webp" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <img className="h-full w-full object-cover" src="/assets/productImages/2.webp" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <img className="h-full w-full object-cover" src="/assets/productImages/3.webp" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
          <img className="h-full w-full object-cover" src="/assets/productImages/4.webp" alt="Product" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
