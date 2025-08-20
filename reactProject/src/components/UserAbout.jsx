import axios from "axios";
import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Button from "../components/Button";

const UserAbout = () => {
    async function  handleUpdate( ) {
    
        let res = await axios.patch(`http://localhost:8000/user/bio/edit`);
     
      }
   return (
      <>
         <div className="w-full  bg-red-300">

         </div>
         <div className="grid pb-10 place-items-end pr-5">
            <Link onClick={handleUpdate} to={'/'}>
            <Button text={"edit"} />
            </Link>
            
         </div>
      </>
   );
};

export default UserAbout;
