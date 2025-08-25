import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";

const UserList = () => {
   let user = useOutletContext();
  console.log(user)
   if (!user || !user.savedPosts || user.savedPosts.length === 0) {
      return <h1>No saved post yet</h1>;
   }

   return (
      <div className="p-10 ">
         {user.savedPosts.map((itm) => {
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

export default UserList;
