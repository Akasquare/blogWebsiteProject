import React, { useState, useEffect, useContext } from "react";
import { Link, useOutletContext } from "react-router-dom";

import ListCard from "./ListCard";
import { UserDataContext } from "../context/userContext";

const YourLists = () => {
   let user = useOutletContext();
   let {loggedInUser}=useContext(UserDataContext)
   console.log(user);
   if (!user || !user.savedPosts || user.savedPosts.length === 0) {
      return <h1 className="px-10 pt-20 text-4xl flex items-center justify-center text-zinc-300">No post yet</h1>;
   }

   return (
      <div className="p-10 ">
         <div className="pb-4">
            <Link to={loggedInUser? `/user/${loggedInUser._id}/readingListPage`: "/login"}>
               <ListCard data={user} />
            </Link>
         </div>
      </div>
   );
};

export default YourLists;
