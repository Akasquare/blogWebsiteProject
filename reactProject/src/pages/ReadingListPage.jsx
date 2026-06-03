import React, { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileCircle from "../components/ProfileCircle";
import { Outlet } from "react-router-dom";
import { UserDataContext } from "../context/userContext";
import Card from "../components/Card";

const ReadingListPage = () => {
   let { loggedInUser } = useContext(UserDataContext);
   const [user, setUser] = useState(null);
   
   console.log(user)
  
   const { id } = useParams();

   if (!loggedInUser || loggedInUser._id !== id) {
      return <Navigate to="/" />;  
   }

   async function getData() {
      try {
         let res = await axios.get(
            `http://localhost:8000/userprofile/${loggedInUser._id}`
         );
         setUser({ ...loggedInUser, ...res.data });
         
      } catch (err) {
         console.error("Error fetching profile data:", err);
      }
   }
   useEffect(() => {
      getData();
   }, []); 

 
   return (
      user && (
         
         
         <div className="md:px-30">
            <div className="px-10 pt-10">
            <div className="pb-10 text-3xl">
               <ProfileCircle
                  size="h-14 w-14"
                  image={user.profileImage}
                  name={user.name}
               />
               {/* {user.savedPosts.length} */}
            </div>
            <div className="text-4xl font-bold pb-5 border-b border-zinc-300">
                <h1>
                Reading list
                </h1>
            </div>
            { user.savedPosts.map((itm) => {
               return (
                  <>
                     <div className="pb-4">
                        
                        <Card data={itm} />
                     </div>
                  </>
               );
            })}
            </div>
             
         </div>
      )
   );
};

export default ReadingListPage;
