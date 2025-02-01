import background1 from "../../assets/images/icon/easy-banking/backgroundimg.avif";
import background2 from "../../assets/images/icon/easy-banking/backgroundimg2.avif";


const OURPHILOSOPHY = () => {
  return (
    <div className="relative flex flex-col items-center py-16 px-6 bg-white mt-40">
      {/* Heading Section */}
      <h4 className="lg:text-head-6 text-res-head-6 uppercase text-blue-500  font-bold">
        OUR PHILOSOPHY
      </h4>
      <h2 className="md:text-6xl text-4xl text-center mx-auto w-full font-bold text-blue-950 mt-2">
        Human-centred innovation
      </h2>
      <div className="container mx-auto mt-10">
        <div>
            <img src={background1} alt="" />
        </div>
        <div className="md:hidden" >
            <img src={background2} alt="" />
        </div>

      </div>

    </div>
  );
};

export default OURPHILOSOPHY;
