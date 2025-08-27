import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";

const UserHome = () => {
   let user = useOutletContext();
   console.log(user)
  if (!user || !user.Posts || user.Posts.length === 0) {
    return <h1 className="px-10 pt-20 text-4xl flex items-center justify-center text-zinc-300">No post yet</h1>;
  }
 
   return (
      <div className="p-10 ">
         { user.Posts.map((itm) => {
               return (
                  <>
                     <div className="pb-4">
                        
                        <Card data={itm} />
                     </div>
                  </>
               );
            })}
      </div>
   );
};

export default UserHome;
