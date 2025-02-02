import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import s1 from "../../assets/images/icon/easy-banking/s1.avif";
import s2 from "../../assets/images/icon/easy-banking/s2.avif";
import s3 from "../../assets/images/icon/easy-banking/s3.avif";
import s4 from "../../assets/images/icon/easy-banking/s4.avif";
import { useTranslation } from "react-i18next";

const TechnologyBuilt = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const { t } = useTranslation();

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
    }
  };
  const slides = [
    {
      id: 1,
      title: "slide1title", // Updated to use translation keys
      heading: "slide1heading",
      p1: "slide1p1",
      p2: "slide1p2",
      img: s1,
    },
    {
      id: 2,
      title: "slide2title",
      heading: "slide2heading",
      p1: "slide2p1",
      p2: "slide2p2",
      img: s2,
    },
    {
      id: 3,
      title: "slide3title",
      heading: "slide3heading",
      p1: "slide3p1",
      p2: "slide3p2",
      img: s3,
    },
    {
      id: 4,
      title: "slide4title",
      heading: "slide4heading",
      p1: "slide4p1",
      p2: "slide4p2",
      img: s4,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-center text-blue-500 font-bold tracking-widest ">
        {t("technologyBuilt")}
      </h1>
      <h2 className="text-center text-blue-950 font-bold  md:text-6xl text-xl  mb-6 mt-5">
        {t("technologyBuiltTitle")}
      </h2>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-20 w-full max-sm:hidden mb-10 mt-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              index === activeIndex
                ? "bg-blue-300 text-blue-500"
                : "bg-gray-50 text-blue-400 hover:bg-teal-50"
            }`}
            onClick={() => goToSlide(index)}
          >
            {t(slide.title)} 
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
                <h3 className="text-lg font-semibold text-blue-500 tracking-widest">
                  {t(slide.title)} {/* Translated title */}
                </h3>
                <h3 className="text-4xl  font-bold text-black my-10">
                  {t(slide.heading)} {/* Translated heading */}
                </h3>
                <div className="md:w-1/2 mt-4 md:mt-0 md:hidden">
                  <img
                    src={slide.img}
                    alt={t(slide.title)} // Translated alt text
                    className="w-full rounded-lg"
                  />
                </div>
                <p className="text-blue-900 mt-2">
                  <strong>{t(slide.p1)}</strong> {/* Translated p1 */}
                </p>
                <p className="text-blue-900 mt-2">{t(slide.p2)}</p>{" "}
                {/* Translated p2 */}
              </div>
              {/* Image */}
              <div className="md:w-1/2 mt-4 md:mt-0 max-sm:hidden">
                <img
                  src={slide.img}
                  alt={t(slide.title)} // Translated alt text
                  className="w-full h-[400px] rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TechnologyBuilt;
