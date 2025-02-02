import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import s1 from "../../assets/images/icon/easy-banking/s1.avif";
import s2 from "../../assets/images/icon/easy-banking/s2.avif";
import s3 from "../../assets/images/icon/easy-banking/s3.avif";
import s4 from "../../assets/images/icon/easy-banking/s4.avif";

const slides = [
  {
    id: 1,
    title: "Customer focused",
    heading: "Purpose-built financial services",
    p1: "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    p2: "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    img: s1,
  },
  {
    id: 2,
    title: "Agile and adaptable",
    heading: "Agile and adaptable for growth",
    p1: "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    p2: "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    img: s2,
  },
  {
    id: 3,
    title: "Compliance ready",
    heading: "Manage compliance with ease",
    p1: "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    p2: "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    img: s3,
  },
  {
    id: 4,
    title: "Secure and safe",
    heading: "Highly secure and safe",
    p1: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
    p2: "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    img: s4,
  },
];

const TechnologyBuilt = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-center text-blue-500 font-bold tracking-widest ">
        TECHNOLOGY BUILT FOR YOU
      </h1>
      <h2 className="text-center text-blue-950 font-bold  md:text-6xl text-xl  mb-6 mt-5">
        The future of finance
      </h2>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-20 w-full max-sm:hidden mb-10 mt-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              index === activeIndex
                ? "bg-blue-300 text-white"
                : "bg-gray-50 text-blue-400 hover:bg-teal-50"
            }`}
            onClick={() => goToSlide(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={50}
        autoplay={{ delay: 5000 }}
        onSlideChange={handleSlideChange}
        className="rounded-lg shadow-xl mt-6  shadow-teal-50"
      >
        {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="bg-white p-6 rounded-lg ">
        <div className="flex flex-col md:flex-row items-start w-full ">
          {/* Text Content */}
          <div className="md:w-1/2 text-start md:text-left p-4">
            <h3 className="text-lg font-semibold text-blue-500 tracking-widest">{slide.title}</h3>
            <h3 className="text-4xl  font-bold text-black my-10">{slide.heading}</h3>
            <div className="md:w-1/2 mt-4 md:mt-0 md:hidden">
            <img src={slide.img} alt={slide.title} className="w-full rounded-lg" />
          </div>
            <p className="text-blue-900 mt-2"><strong>{slide.p1}</strong></p>
            <p className="text-blue-900 mt-2">{slide.p2}</p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 mt-4 md:mt-0 max-sm:hidden">
            <img src={slide.img} alt={slide.title} className="w-full  h-[400px] rounded-lg" />
          </div>
        </div>
      </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechnologyBuilt;
