import React, { useContext } from "react";
import Banner from "../Componenets/Banner/Banner";
import FutureFINANCE from "../Componenets/FutureFINANCE/FutureFINANCE";
import OURPHILOSOPHY from "../Componenets/OURPHILOSOPHY/OURPHILOSOPHY";
import TECHNOLOGYBUILT from "../Componenets/TECHNOLOGYBUILT/TECHNOLOGYBUILT";
import TRUSTEDBYTHEBEST from "../Componenets/TRUSTEDBYTHEBEST/TRUSTEDBYTHEBEST";



const Home = () => {
  

    return (
        <div> {/* 🔹 Key forces re-render when language changes */}
            <Banner />
            <FutureFINANCE />
            <OURPHILOSOPHY />
            <TECHNOLOGYBUILT />
            <TRUSTEDBYTHEBEST />
        </div>
    );
};

export default Home;
