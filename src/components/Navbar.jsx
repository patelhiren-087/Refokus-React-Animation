import React from "react";
import Button from "./Button";
function Navbar() {
  return (
    <div className="max-w-screen-lg mx-auto p-3 p-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
      <h5 className="font-semibold">Refokus</h5>
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) => 
          elem.length === 0 ? (
            <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a key={index} href="#" className="text-sm flex items-center gap-1">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.45rem #00FF19" }}
                  className="inline-block w-1 h-1 rounded-full bg-[#00FF19]"
                ></span>
            )}
            {elem}
          </a>
  ))}
      </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;
