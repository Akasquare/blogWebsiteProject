import React, {useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../context/userContext";
// import { useState } from "react";

const Write = () => {
   const navigate = useNavigate();
   const { register, handleSubmit } = useForm();
    let {loggedInUser} = useContext(UserDataContext)

   async function submitBlog(data) {
      if( loggedInUser ){ 

   
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append(
         "author",
         JSON.parse(localStorage.getItem("logedIn")).user._id
      );
      if (data.image[0]) {
         formData.append("image", data.image[0]);
      }

      let res = await axios.post("http://localhost:8000/post", formData, {
         headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
         navigate("/");
         alert("Blog posted!");
      } else {
         alert("Failed to post blog");
      }
   }else{
      navigate("/login");
      alert(" You must be logged In first to write Story!");
   }
   }

   return (
      <form
         onSubmit={handleSubmit(submitBlog)}
         className="p-5 h-[80vh]   md:px-50 bg-zinc-200 rounded-xl"
      >
         <div className="pb-5">
            <input
               {...register("title")}
               placeholder="Title"
               className=" font-serif text-5xl p-2 w-full"
               type="text"
               required
            />
         </div>

         <div className="pb-5 h-auto">
            <textarea
               {...register("description")}
               placeholder="Tell your story..."
               className=" font-serif h-auto text-xl p-2 w-full"
               required
            />
         </div>

         <div className="pb-5">
            <label>Image</label>
            <input
               {...register("image")}
               className="border rounded-3xl border-blue-600 p-2 w-full"
               type="file"
            />
         </div>

         <button className="bg-purple-500 text-white px-4 py-2 rounded">
            Post Blog
         </button>
      </form>
   );
};

export default Write;
