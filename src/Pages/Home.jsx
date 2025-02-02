import React from 'react';
import Banner from '../Componenets/Banner/Banner';
import FutureFINANCE from '../Componenets/FutureFINANCE/FutureFINANCE';
import OURPHILOSOPHY from '../Componenets/OURPHILOSOPHY/OURPHILOSOPHY';
import TECHNOLOGYBUILT from '../Componenets/TECHNOLOGYBUILT/TECHNOLOGYBUILT';
import TRUSTEDBYTHEBEST from '../Componenets/TRUSTEDBYTHEBEST/TRUSTEDBYTHEBEST';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FutureFINANCE></FutureFINANCE>
            <OURPHILOSOPHY></OURPHILOSOPHY>
            <TECHNOLOGYBUILT></TECHNOLOGYBUILT>
            <TRUSTEDBYTHEBEST></TRUSTEDBYTHEBEST>
            
        </div>
    );
};

export default Home;