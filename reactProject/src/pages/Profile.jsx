import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import ProfileCircle from "../components/ProfileCircle";
import { Outlet } from "react-router-dom";

const Profile = () => {
   const [userData, setUserData] = useState(null);
   const info = localStorage.getItem("logedIn");
   const { user } = JSON.parse(info);

   async function getData() {
      try {
         let res = await axios.get(
            `http://localhost:8000/userprofile/${user._id}`
         );

         setUserData({ ...user, ...res.data });
      } catch (err) {
         console.error("Error fetching profile data:", err);
      }
   }
   useEffect(() => {
      getData();
   }, []);
   console.log(userData);
   return userData && (
         <div className="px-10">
            <div className="py-15 border-b border-gray-300 text-3xl">
               <ProfileCircle
                  size="h-14 w-14"
                  image={userData.profileImage}
                  name={userData.name}
               />
            </div>
            <div className="flex text-gray-600 pb-10 flex-start gap-x-5">
            <Link className=" flex pb-3 focus:border-b focus:text-black  gap-x-3 items-center" to={"home"} >
            Home</Link>
            <Link className=" flex pb-3 focus:border-b gap-x-3 items-center" to={"list"} >
            List</Link>
            <Link className=" flex pb-3 focus:border-b gap-x-3 items-center" to={"about"} >
            About</Link>
            </div>
            <div>
            <Outlet context={userData}/>
            </div>
         </div>
      )
   
};

export default Profile;
