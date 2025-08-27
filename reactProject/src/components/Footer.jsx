import React from "react";
import { Link } from "react-router-dom";
const footerStyle = {
  padding: "0 30px 0 10px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  width: "100%",
  height: "13vh",
  justifyContent: "center",
  color: "#242424",
  backgroundColor: "#fbfbff",
  borderTop: "1px solid #000",
};
const Footer = () => {
  return (
    <>
      <div className="" style={footerStyle}>
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
