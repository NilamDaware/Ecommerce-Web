import React from "react";
import "./Midsection.css"; // Make sure this file exists

const Midsection = () => {
  return (
    <>
      <div className="main">
        <div className="txt">
          <p>
            Step into the world of trendsetting fashion with <strong>Fashion Store!</strong> We bring you the latest trends in women's fashion with high-quality styles that blend sophistication with modern trends. From runway-inspired outfits to everyday chic essentials, our collection is crafted with premium fabrics and impeccable craftsmanship. We ensure every piece is designed for elegance, comfort, and durability. Upgrade your wardrobe with the best in trendy and high-quality fashion!
          </p>
        </div>
        <div className="photo">
          <img src="/models1.png" alt="Fashion Model" />
        </div>
      </div>

      <div className="marquee-container">
        <marquee behavior="scroll" direction="left">
          <h1 style={{color:"white"}}> Up to <span>40% Off</span> on Partywear! </h1>
        </marquee>
      </div>
    </>
  );
};

export default Midsection;
