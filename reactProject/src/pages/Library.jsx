import React, { useContext } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProfileCircle from "../components/ProfileCircle";
import { Outlet } from "react-router-dom";
import { UserDataContext } from "../context/userContext";

const Profile = () => {
   let { loggedInUser } = useContext(UserDataContext);
   const [user, setUser] = useState(null);
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
         <div className="px-30 flex flex-col">
            <div className="px-10 pt-10">
               <p className="text-4xl pb-5 text-zinc-800 font-bold">Your library</p>

               <div className="flex border-b border-gray-300 text-gray-600 flex-start gap-x-5">
                  <Link
                     className=" flex pb-3 focus:border-b focus:text-black  gap-x-3 items-center"
                     to={`yourList`}
                  >
                     Your List
                  </Link>
                  <Link
                     className=" flex pb-3 focus:border-b gap-x-3 items-center"
                     to={"readinghistory"}
                  >
                     Reading history
                  </Link>
                  {/* <Link
                     className=" flex pb-3 focus:border-b gap-x-3 items-center"
                     to={"about"}
                  >
                     About
                  </Link> */}
               </div>
            </div>
            <div>
               <Outlet context={user} />
            </div>
         </div>
      )
   );
};

export default Profile;
