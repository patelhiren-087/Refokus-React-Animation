import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "/assets/workImages/1.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "/assets/workImages/2.webp",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "/assets/workImages/3.webp",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "/assets/workImages/4.webp",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "/assets/workImages/5.webp",
      top: "60%",
      left: "53%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imgShow(arr) {
      setImages((prev) => 
        prev.map((item,index) =>
          arr.indexOf(index) === -1 
            ? {...item, isActive : false} 
            : {...item, isActive : true}
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imgShow([]);
        break;
      case 1:
        imgShow([0]);
        break;
      case 2:
        imgShow([0,1]);
        break;
      case 3:
        imgShow([0,1,2]);
        break;
      case 4:
        imgShow([0,1,2,3]);
        break;
      case 5:
        imgShow([0,1,2,3,4]);
        break;
    }
  });

  return (
    <div className="w-full mt-5">
      <div className="relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium tracking-tight select-none">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full ">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
