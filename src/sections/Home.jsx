import React from "react";
import Divider from "../components/Divider";

const Home = () => {
  return (
    <section className="">
      <div className="max-w-[650px] text-[58px] font-serif mx-auto mt-[100px]">
        <div className="flex items-center gap-3">
          <Divider />
          <h6 className="uppercase font-sans text-[12px] text-secondary">
            a hiking guide
          </h6>
        </div>
        <h3 className="mx-auto">Be Prepared For The Mountains And Beyond</h3>
      </div>
    </section>
  );
};

export default Home;
