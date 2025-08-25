import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import Button from "../components/Button";
import { UserDataContext } from "../context/userContext";
import { useForm } from "react-hook-form";

const UserAbout = () => {
   let { register, handleSubmit } = useForm();

   let { loggedInUser, setLoggedInUser } = useContext(UserDataContext);
   let [hide, setHide] = useState(false);
   async function getFormData(data) {
      let res = await axios.post(
         `http://localhost:8000/user/${loggedInUser._id}/bioedit`,
         { bio: data.bio }
      );
      if (res.data.success) {
         setLoggedInUser(res.data.user);
         alert("Bio updated");
      }
      console.log(res.data.user);
   }

   return (
      <>
         <div className="px-10 pb-5">
            <div className={hide ? "hidden" : "block"}>
               <div className="w-full py-3 ">{loggedInUser.bio}</div>
               <div className="grid pb-5 place-items-end pr-5">
                  <Link onClick={() => setHide(true)} to={"#"}>
                     <Button text={"edit"} />
                  </Link>
               </div>
            </div>

            <form
               className={hide ? "block" : "hidden"}
               onSubmit={handleSubmit(getFormData)}
               action=""
            >
               <textarea
                  className="border border-zinc-400 w-full py-3 border-3xl rounded"
                  {...register("bio")}
                  defaultValue={loggedInUser.bio}
                  cols=""
                  row={5}
                  required
                  onInput={(e) => {
                     e.target.style.height = "auto"; // reset
                     e.target.style.height = e.target.scrollHeight + "px"; // grow
                  }}
               ></textarea>
               <div className="py-4 grid place-items-end pr-5">
                  <button
                     onClick={() => setHide(false)}
                     className="border px-4 py-2 rounded-3xl hover:bg-[#242424] hover:text-white"
                  >
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </>
   );
};

export default UserAbout;
