import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";

import logo1 from "../../assets/images/trustedlogos/logo1.png";
import logo2 from "../../assets/images/trustedlogos/logo2.png";
import logo3 from "../../assets/images/trustedlogos/logo3.png";
import logo4 from "../../assets/images/trustedlogos/logo4.png";
import logo5 from "../../assets/images/trustedlogos/logo5.png";
import logo6 from "../../assets/images/trustedlogos/logo6.png";
import logo7 from "../../assets/images/trustedlogos/logo7.png";
import logo8 from "../../assets/images/trustedlogos/logo8.png";
import logo9 from "../../assets/images/trustedlogos/logo9.png";
import logo10 from "../../assets/images/trustedlogos/logo10.png";
import logo11 from "../../assets/images/trustedlogos/logo11.png";
import logo12 from "../../assets/images/trustedlogos/logo12.png";
import logo13 from "../../assets/images/trustedlogos/logo13.png";
import logo14 from "../../assets/images/trustedlogos/logo14.png";
import logo15 from "../../assets/images/trustedlogos/logo15.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15
];

const TrustedLogos = () => {
  return (
    <div className="container mx-auto p-4 mt-40">
      {/* Grid Layout for Large Screens */}
      <div className="hidden md:grid grid-cols-3 md:grid-cols-5 gap-x-16 gap-y-[34px]">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Trusted Logo ${index + 1}`} className="w-48 h-24 object-contain" />
        ))}
      </div>

      {/* Swiper Slider for Small Devices */}
      <div className="block md:hidden">
        <Swiper
          slidesPerView={2} // Minimum visible logos
          spaceBetween={30}
          freeMode={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }} // Auto slide every 2 sec
          loop={true}
          modules={[FreeMode, Autoplay]}
          className="w-full"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img src={logo} alt={`Trusted Logo ${index + 1}`} className="w-36 h-20 object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedLogos;
