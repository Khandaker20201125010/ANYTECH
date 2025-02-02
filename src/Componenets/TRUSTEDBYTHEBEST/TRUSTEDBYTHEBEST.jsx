import React, { useEffect, useState } from "react";
import TrustedLogos from "./TrustedLogos";
import { useTranslation } from "react-i18next";


const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
 

  useEffect(() => {
    let start = 0;
    const duration = 800;
    const increment = end / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);
    return () => clearInterval(interval);
  }, [end]);

  return <span>{count}</span>;
};

const TRUSTEDBYTHEBEST = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center py-20 font-montserrat">
      <p className="text-blue-500 font-semibold text-lg uppercase mb-5 tracking-widest">
        {t("trustedByTheBest")}
      </p>
      <div className="flex flex-col sm:flex-row items-center md:justify-center sm:space-x-44 space-y-10 sm:space-y-0 mt-4">
        {/* Experience */}
        <div className="md:text-center max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-between max-sm:w-full border-dashed max-sm:max-sm:border-b-2 border-blue-500 pb-3">
          <p className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-900 via-blue-800 to-blue-400">
            &gt;
            <Counter end={20} />
          </p>
          <p className="text-gray-600 mt-3 sm:mt-5 font-medium max-sm:text-left">
            {t("yearsOfExperience")}
          </p>
        </div>

        {/* Financial Institutions */}
        <div className="md:text-center max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-between max-sm:w-full border-dashed max-sm:border-b-2 border-blue-500 pb-3">
          <p className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-900 via-blue-800 to-blue-400">
            <Counter end={40} />+
          </p>
          <p className="text-gray-600 mt-3 sm:mt-5 font-medium max-sm:text-left">
            {t("financialInstitutions")}
          </p>
        </div>

        {/* Customers Each */}
        <div className="md:text-center max-sm:flex max-sm:flex-row max-sm:items-center max-sm:justify-between max-sm:w-full border-dashed max-sm:border-b-2 border-blue-500 pb-3">
          <p className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-900 via-blue-800 to-blue-400">
            &gt;
            <Counter end={200} />m
          </p>
          <p className="text-gray-600 mt-3 sm:mt-5 font-medium max-sm:text-left">
            {t("customersEach")}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <TrustedLogos />
      </div>
    </div>
  );
};

export default TRUSTEDBYTHEBEST;
