import React from "react";
import Marquee from "./Marquee";

function Marquees() {
  var images = [
    [
      "/assets/marqueeSvg/1.svg",
      "/assets/marqueeSvg/2.svg",
      "/assets/marqueeSvg/3.svg",
      "/assets/marqueeSvg/4.svg",
      "/assets/marqueeSvg/5.svg",
      "/assets/marqueeSvg/6.svg",
      "/assets/marqueeSvg/7.svg",
      "/assets/marqueeSvg/8.svg",
      "/assets/marqueeSvg/9.svg",
      "/assets/marqueeSvg/10.png",
      "/assets/marqueeSvg/11.webp",
    ],
    [
      "/assets/marqueeSvg/1.svg",
      "/assets/marqueeSvg/2.svg",
      "/assets/marqueeSvg/3.svg",
      "/assets/marqueeSvg/4.svg",
      "/assets/marqueeSvg/5.svg",
      "/assets/marqueeSvg/6.svg",
      "/assets/marqueeSvg/7.svg",
      "/assets/marqueeSvg/8.svg",
      "/assets/marqueeSvg/9.svg",
      "/assets/marqueeSvg/10.png",
      "/assets/marqueeSvg/11.webp",
    ],
  ];

  return (
    <div className="py-20 w-full relative overflow-hidden">
      {images.map((item, index) => (
        <Marquee
          imgUrls={item}
          key={index}
          direction={index === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

export default Marquees;
