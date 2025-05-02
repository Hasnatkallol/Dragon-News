import React from "react";
import Marquee from "react-fast-marquee";

const Marque = () => {
  return (
    <div className="w-11/12 mx-auto bg-base-300 rounded-xl">
      <div className=" p-3 flex gap-5">
        <button className="btn btn-secondary">Latest</button>
        <Marquee pauseOnHover={true} speed={60}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, nam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, nam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, nam.</p>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
