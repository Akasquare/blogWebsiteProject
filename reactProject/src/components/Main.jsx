import React from "react";
import Button from "./Button";
const mainStyle = {
  padding: "35vh 2vw",
  height: "90%",
  color: "#242424",
  backgroundColor: "#f7f4ed",
};
const hStyle = {
   
  fontWeight : "500",
  fontSize: "5.5rem",
  lineHeight: "4rem",
};

const Main = () => {
  return (
    <>
      <div style={mainStyle}>
        <h1 style={hStyle}>Human</h1>
        <h1 style={hStyle}>stories & ideas</h1>
        <p style={{ margin:"5vh 0",fontSize: "1.3rem" }}>
          A place to read, write, and deepen your understanding
        </p>
        <Button text="Start reading" />
      </div>
    </>
  );
};

export default Main;
