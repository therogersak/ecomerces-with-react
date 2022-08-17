import React, { useState, useEffect } from "react";

const images = {
  img1: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/fc552e3e501cf06c.jpg?q=50",
  img2: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/d99193f6da988dbb.jpg?q=50",
  img3: "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/a44ac279b28e042e.jpg?q=50",
};

function Banner() {

  
  
  

  return (
    <>
      <div>
        <div className="w-full h-[250px] shadow-lg flex overflow-x-scroll scrollbar-hide snap-x items-center">
          <img src={images.img1} className="w-full h-full snap-x object-cover" />
          <img src={images.img2} className={`w-full h-full snap-x object-cover`} />
          <img src={images.img3} className="w-full h-full snap-x object-cover" />
        </div>
      </div>
    </>
  );
}

export default Banner;
