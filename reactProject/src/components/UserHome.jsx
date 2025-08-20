import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";

const UserHome = () => {
   let user = useOutletContext();

  if (!user || !user.post || user.post.length === 0) {
    return <h1>No post yet</h1>;
  }
 
   return (
      <div className="p-10 ">
         { user.post.map((itm) => {
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
