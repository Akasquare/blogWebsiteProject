import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
 
import ListCard from "./ListCard";

const YourLists = () => {
   let user = useOutletContext();
 console.log(user.lists)
  if (!user || !user.Posts || user.Posts.length === 0) {
    return <h1>No post yet</h1>;
  }
 
   return (
      <div className="p-10 ">
         <div></div>

         { user.Posts.map((itm) => {
               return (
                  <>
                     <div className="pb-4">
                        
                        <ListCard data={itm} />
                     </div>
                  </>
               );
            })}
      </div>
   );
};

export default YourLists;
