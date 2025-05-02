import React from "react";
import Logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="w-11/12 mx-auto ">
        <div className="flex flex-col justify-center items-center my-5">
      <img className="w-[350px]" src={Logo} alt="" />
      <p className="text-accent py-2">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold">{format( new Date(), 'EEEE, MMMM MM , yyyy')}</p>
    </div>
    </div>
  );
};

export default Header;
