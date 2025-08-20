import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MessageCircleMore, ThumbsUp, Share2, Bookmark } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { useForm } from "react-hook-form";
import ProfileCircle from "./ProfileCircle";

const ViewCard = () => {
   let { id } = useParams();
   const [post, setPost] = useState(null);
   let data = localStorage.getItem("logedIn");
   let userData =JSON.parse(data);
   console.log(userData)
   //form
   let { register, handleSubmit } = useForm();
   function getFormData(data) {
      let { comment } = data;
      console.log(name);
      console.log(password);
   }

   //fetch api
   async function getData() {
      let res = await axios.get(`http://localhost:8000/post/${id}`);
      setPost(res.data.post);
   }
   useEffect(() => {
      getData();
   }, []);

   return (
      post && (
         <>
            <div className="px-10  py-5 md:px-40 ">
               <div className=" mx-auto w-[100%]">
                  <h2 className="text-4xl py-8">{post.title}</h2>
                  <div className="flex gap-x-4 pb-6 items-center">
                     <ProfileCircle
                        size="h-10 w-10"
                        image={post.author.profileImage}
                        name={post.author.name}
                     />
                     <p className="text-sm  ">
                        6 min read ·{" "}
                        {new Date(post.createdAt).toLocaleString("en-US", {
                           month: "short",
                           day: "numeric",
                           year: "numeric",
                           hour: "2-digit",
                           minute: "2-digit",
                        })}
                     </p>
                  </div>

                  <div className="flex my-8  justify-between border-y py-3 border-gray-300 items-center">
                     <div className="flex gap-x-4">
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={"/ourstory"}
                        >
                           <ThumbsUp className="w-6 h-6 text-gray-700" />
                           1.7k
                        </Link>
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={"/ourstory"}
                        >
                           <MessageCircleMore className="w-6 h-6 text-gray-700" />
                           112
                        </Link>
                     </div>
                     <div className="flex gap-x-4">
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={"/ourstory"}
                        >
                           <Bookmark className="w-6 h-6 text-gray-700" />
                        </Link>
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={"/ourstory"}
                        >
                           <Share2 className="w-6 h-6 text-gray-700" />
                        </Link>
                     </div>
                  </div>
                  <br />

                  <img className=" rounded-xl" src={post.image} alt="" />
                  <h2></h2>
                  <p className="py-5 text-lg">{post.description}</p>
               </div>
               <div>
                  <h1 className="py-5 text-lg">Responses</h1>
                  <ProfileCircle
                        size="h-10 w-10"
                        image={post.author.profileImage}
                        name={post.author.name}
                     />
                  <div className="flex gap-x-4 pb-6 items-center"></div>
                  <form onSubmit={handleSubmit(getFormData)} action="">
                     <label htmlFor="comment" className="">
                        Comments
                     </label>
                     <textarea
                        className="border border-zinc-400 w-[100%]
                           border-3xl p-2 rounded"
                        {...register("comment")}
                        placeholder="What are your thoughts? "
                        id="comment"
                        cols=""
                        row="10"
                     ></textarea>
                     <div className="py-4">
                        <button className="border px-4 py-2 rounded-3xl hover:bg-[#242424] hover:text-white">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
               <div>
                  <ReviewCard post={post} />
               </div>
            </div>
         </>
      )
   );
};

export default ViewCard;
