import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {
   Menu,
   Home,
   ChevronRight,
   User,
   BookCopy,
   BookText,
   GalleryHorizontalEnd ,
} from "lucide-react";
import { UserDataContext } from "../context/userContext";

const SideBar = () => {
   let { loggedInUser }= useContext(UserDataContext)
    
 
   return (
      <div className=" hidden md:block  text-md bg-white flex flex-col gap-y-5 md:w-[240px] h-[100vh]">
         <div>
            <div>
               <div className="  p-8 flex flex-col gap-y-5">
                  {/* <Menu className="w-6 h-6 text-gray-700" />   */}

                  <Link className=" flex  gap-x-3 items-center" to={"/"}>
                     <Home className="w-6 h-6 text-gray-700" /> Home
                  </Link>
                  <Link
                     className=" flex  gap-x-3 items-center"
                     to={loggedInUser? `/user/${loggedInUser._id}/library`: "/login"}
                  >
                     <BookCopy className="w-6 h-6 text-gray-700" />
                     Library
                  </Link>
                  <Link
                     className=" flex  gap-x-3 items-center"
                     to={loggedInUser? `/user/${loggedInUser._id}/profile`: "/login"}
                        
                  >
                     <User className="w-6 h-6 text-gray-700" /> Profile
                  </Link>
                  <Link
                     className=" flex  gap-x-3 items-center"
                     to={"#"}
                  >
                     <BookText className="w-6 h-6 text-gray-700" />
                     Stories
                  </Link>
                  <Link
                     className=" flex  gap-x-3 items-center"
                     to={"/ourstory"}
                  >
                     <GalleryHorizontalEnd  className="w-6 h-6 text-gray-700" />
                     Our Story
                  </Link>
               </div>
            </div>
            <div className=" px-7 pb-8 pt-3 text-zinc-300">
               <hr className=" text-zinc-300" />
            </div>
            <div className="flex px-8 flex-col gap-y-5">
               <h1 className="flex  gap-x-3 items-center">
                  Following <ChevronRight className="w-5 h-5  text-gray-700" />{" "}
               </h1>
               <div className="flex gap-x-5">
                  <User className="w-11 h-8 text-gray-700" />
                  <div className="text-sm">
                     <p>Discover more writers and publications to follow. </p>
                     <Link
                        className=" flex gap-x-3 items-center"
                        to={"/ourstory"}
                     >
                        <p>See suggestions</p>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SideBar;
