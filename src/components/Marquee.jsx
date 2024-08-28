import React from "react";
import { motion } from "framer-motion";

function Marquee({ imgUrls , direction }) {
  return (
    <div className="flex w-full overflow-hidden invert">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{x: direction === "left" ? "-100%" : "0"}}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imgUrls.map((url, index) => (
          <img src={url} key={index} className="h-5" />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{x: direction === "left" ? "-100%" : "0"}}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {imgUrls.map((url, index) => (
          <img src={url} key={index} className="h-5" />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
