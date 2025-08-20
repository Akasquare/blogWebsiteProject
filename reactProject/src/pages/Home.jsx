import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Home = () => {
   
   return (
      <>
         <div className="fixed  left-0 ">
            <SideBar />
         </div>

         <div className=" flex flex-col md:pl-[240px] ">
            <Outlet />
         </div>
      </>
   );
};

export default Home;
