import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import gsap from "gsap";
import icon1 from "../../assets/images/icon/easy-banking/icon1.svg";
import icon2 from "../../assets/images/icon/easy-banking/icon2.avif";
import icon3 from "../../assets/images/icon/easy-banking/icon3.svg";

const cards = [
  {
    icon: icon1,
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: icon2,
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: icon3,
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

const OURPHILOSOPHYCARD = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div className="w-full container mx-auto py-8 overflow-hidden">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        onSwiper={() => {
          gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.3,
              duration: 1,
              ease: "power3.out",
            }
          );
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className="p-10 rounded-[20px] bg-[#F8FCFF] text-start z-20 min-h-[300px] flex flex-col justify-between opacity-0"
            >
              <div className="flex justify-start mb-4">
                <img className="w-12" src={card.icon} alt={card.title} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mt-2 flex-grow w-80 h-[80px] overflow-hidden line-clamp-3">
                {card.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OURPHILOSOPHYCARD;
