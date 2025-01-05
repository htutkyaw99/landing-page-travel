import React from "react";
import Divider from "../components/Divider";
import Gradi from "../assets/images/BG Content.png";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="bg-hero bg-cover bg-bottom min-h-screen relative">
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-0"></div>
      <div className="max-w-[650px] text-[58px] font-serif mx-auto pt-[100px] relative z-10">
        <div className="flex items-center gap-3">
          <Divider />
          <h6 className="uppercase font-sans text-[12px] text-secondary">
            a hiking guide
          </h6>
        </div>
        <h3 className="mx-auto">Be Prepared For The Mountains And Beyond</h3>
      </div>
      <img src={Gradi} alt="" className="relative z-10" />
    </section>
  );
};

export default Home;
