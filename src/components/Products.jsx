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
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "YYR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Remind!",
      description:
        "Remind's new website was designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
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
            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8682a7bae884b4a8177_Arqitel%20-%2016%209%20(A).webp" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8c8de92be5a9bdae6f1_Layout%20Land%20-%2016%209%20(A).webp" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d845d2ededb4ef0bae51_YIR%202022%20-%2016%209%20(A).webp" alt="" />
          </motion.div>
          <motion.div animate={{y: -pos + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full">
            <img className="h-full w-full object-cover" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d5b25919f738bad2243f_Remind%20-%2016%209%20(A).webp" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
