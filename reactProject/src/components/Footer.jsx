import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className=" flex items-center gap-x-10  h-[13vh] justify-center text-[#242424] bg-[#fbfbff] border-t "  >
        <Link to={"/about"}>About</Link>
        <Link to={"/help"}>Help</Link>
        <Link to={"/terms"}>Terms</Link>
        <Link to={"/privacy"}>Privacy</Link>
        <Link to={"/rules"}>Rules</Link>
      </div>
    </>
  );
};

export default Footer;
