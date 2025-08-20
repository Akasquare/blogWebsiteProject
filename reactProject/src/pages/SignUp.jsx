import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
   const navigate = useNavigate();
   let { register, handleSubmit } = useForm();
   async function getData(data) {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("profileImage", data.profileImage[0]);

      let res = await axios.post(
         "http://localhost:8000/user/signup",
         formData,
         {
            headers: { "Content-Type": "multipart/form-data" },
         }
      );
      localStorage.setItem("logedIn", JSON.stringify(res.data));

      console.log(res.data);
      if (res.data.success) {
         navigate("/");
      } else {
         alert("email exist! use new email");
      }
   }

   return (
      <>
         <div className="flex items-center justify-center p-10 bg-zinc-100 h-[100vh]">
            <form
               className="rounded-xl bg-zinc-200 p-10"
               onSubmit={handleSubmit(getData)}
               action=""
            >
               <div className="flex justify-center pb-10 ">
                  <h1 className="text-4xl">Sign Up</h1>
               </div>
               <div className="flex items-center gap-x-3 pb-5">
                  <label htmlFor="name">UserName</label>
                  <input
                     className="border border-purple-500 rounded-xl p-2"
                     {...register("name")}
                     type="text"
                     id="name"
                     placeholder="Enter name"
                  />
               </div>
               <div className="flex items-center gap-x-11 pb-5">
                  <label htmlFor="name">email</label>
                  <input
                     className="border border-purple-500 rounded-xl p-2"
                     {...register("email")}
                     type="email"
                     id="email"
                     placeholder="Enter email"
                  />
               </div>
               <div className="flex items-center gap-x-4 pb-5">
                  <label htmlFor="password">Password</label>
                  <input
                     className="border border-purple-500 rounded-xl p-2"
                     {...register("password")}
                     type="password"
                     id="password"
                     placeholder="Enter password"
                  />
               </div>
               <div className="flex items-center gap-x-1 pb-5">
                  <label htmlFor="profileImage">ProfileImage</label>
                  <input
                     className="border border-purple-500 rounded-xl p-2"
                     {...register("profileImage")}
                     type="file"
                     id="profileImage"
                     placeholder="profileImage link"
                  />
               </div>
               <div className="flex justify-center">
                  <button className="bg-purple-400 hover:bg-purple-600 px-5 py-1 rounded-2xl text-white">
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </>
   );
};

export default SignUp;
