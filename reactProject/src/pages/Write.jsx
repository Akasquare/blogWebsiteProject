import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Write = () => {
  const { register, handleSubmit } = useForm();

  async function submitBlog(data) {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("author", JSON.parse(localStorage.getItem("logedIn")).user._id);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    let res = await axios.post("http://localhost:8000/post", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(res.data)

    if (res.data.success) {
      alert("Blog posted!");
    } else {
      alert("Failed to post blog");
    }
  }

  return (
    <form onSubmit={handleSubmit(submitBlog)} className="p-5  px-50 bg-zinc-200 rounded-xl">
      <div className="pb-3">
       
        <input {...register("title")} placeholder="Title" className=" font-serif text-5xl p-2 w-full" type="text" />
      </div>

      <div className="pb-3">
         
        <textarea  {...register("content")} placeholder="Tell your story..." className=" font-serif text-xl p-2 w-full" />
      </div>

      <div className="pb-3">
        <label>Image</label>
        <input {...register("image")} className="border rounded-3xl border-blue-600 p-2 w-full" type="file" />
      </div>

      <button className="bg-purple-500 text-white px-4 py-2 rounded">Post Blog</button>
    </form>
  );
};

export default Write;
