import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { MessageCircleMore, ThumbsUp, Share2, Bookmark, Filter } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { useForm } from "react-hook-form";
import ProfileCircle from "./ProfileCircle";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/userContext";

const ViewCard = () => {
   let { loggedInUser } = useContext(UserDataContext);
   const [post, setPost] = useState(null);
   const [user, setUser] = useState(null);
   const [whatsappLink, setwhatsappLink] = useState(null);
   const navigate = useNavigate();
   let { id } = useParams();

   // console.log(user)
   async function getData() {
      let res = await axios.get(`http://localhost:8000/post/${id}`);
      setPost(res.data.post);

      if (loggedInUser) {
         const resUser = await axios.get(
            `http://localhost:8000/user/${loggedInUser._id}`
         );
         // console.log(resUser.data.user)
         setUser(resUser.data.user);
      }
   }

   useEffect(() => {
      getData();
   }, []);

   useEffect(() => {
      if (post) {
         const url = `http://localhost:5173/post/${id}`;
         const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
            `${post.title} - Read more: ${url}`
         )}`;
         setwhatsappLink(whatsappUrl);
      }
   }, [post, id]);

   //form
   let { register, handleSubmit, reset } = useForm();

   async function getFormData(data) {
      if (loggedInUser) {
         if (loggedInUser._id === post.author._id) {
            alert("You can not comment on your own Blog!!!");
         } else {
            let res = await axios.post(
               `http://localhost:8000/post/${id}/comment`,
               {
                  comment: data.comment,
                  author: loggedInUser._id,
               }
            );

            if (res.data.success) {
               getData();
               alert("review created");
               reset();
            }
         }
      } else {
         alert("You must be logged in first");
         navigate("/login");
      }
   }
   async function likeToPost() {
      if (loggedInUser) {
         let res = await axios.post(`http://localhost:8000/post/like`, {
            userId: loggedInUser._id,
            postId: post._id,
         });

         if (res.data.success) {
            if (res.data.liked) {
               alert("You liked this blog 👍");
               getData();
            } else {
               alert("You unliked this blog 👎");
               getData();
            }
         }
      } else {
         alert("You must be logged in to like");
      }
   }
   async function saveToPost() {
      if (loggedInUser) {
         let res = await axios.post(`http://localhost:8000/post/save`, {
            userId: loggedInUser._id,
            postId: post._id,
         });

         if (res.data.success) {
            getData();
            if (res.data.saved) {
               alert("You saved this blog 👍");
            } else {
               alert("You unsaved this blog 👎");
            }
         }
      } else {
         alert("You must be logged in to save!!");
      }
   }

   return (
      post && (
         <>
            <div className="px-10  py-5 lg:px-40 ">
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
                           to={"#"}
                           onClick={likeToPost}
                           title="Like"
                        >
                           {user?.likedPosts
                              ?.map(String)
                              .includes(String(id)) ? (
                              <ThumbsUp className="w-6 h-6 fill-gray-800 text-gray-900" />
                           ) : (
                              <ThumbsUp className="w-6 h-6 text-gray-700" />
                           )}

                           {post.likes.length}
                        </Link>
                        <Link className=" flex  gap-x-2 items-center" to={"#"}>
                           <MessageCircleMore
                              className="w-6 h-6 text-gray-700"
                              onClick={() => {
                                 document
                                    .getElementById("comments")
                                    ?.scrollIntoView({ behavior: "smooth" });
                              }}
                           />
                           {post.reviews.length}
                        </Link>
                     </div>
                     <div className="flex gap-x-4">
                        <Link
                           className=" flex  gap-x-2 items-center"
                           onClick={saveToPost}
                           to={"#"}
                           title="Save Post"
                        >
                           {user?.savedPosts
                              ?.map(String)
                              .includes(String(id)) ? (
                              <Bookmark className="w-6 h-6 fill-gray-800 text-gray-900" />
                           ) : (
                              <Bookmark className="w-6 h-6 font-thin text-gray-700" />
                           )}
                        </Link>
                        {whatsappLink && (
                           <a
                              className="flex gap-x-2 items-center"
                              href={whatsappLink}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <Share2 className="w-6 h-6 text-gray-700" />
                           </a>
                        )}
                     </div>
                  </div>
                  <br />

                  <img className=" rounded-xl" src={post.image} alt="" />
                  <h2></h2>
                  <p className="py-5 text-lg">{post.description}</p>
               </div>
               <div id="comments">
                  <h1 className="py-5 text-lg">Responses</h1>
                  {loggedInUser && (
                     <ProfileCircle
                        size="h-10 w-10"
                        image={loggedInUser.profileImage}
                        name={loggedInUser.name}
                     />
                  )}

                  <div
                     id="comments"
                     className="flex gap-x-4 pb-6 items-center"
                  ></div>
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
                        required
                     ></textarea>
                     <div className="py-4">
                        <button className="border px-4 py-2 rounded-3xl hover:bg-[#242424] hover:text-white">
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
               <div className="flex flex-col gap-y-2">
                  {post.reviews && post.reviews.length > 0 ? (
                     [...post.reviews].reverse().map((itm) => (
                        <ReviewCard key={itm._id} id={id} review={itm} onDelete={(id) =>{ setPost((prev)=>({...prev, reviews: post.reviews.filter((r)=>r._id !== id) }))}} />
                     ))
                  ) : (
                     <p>No Comment Yet</p>
                  )}
               </div>
            </div>
         </>
      )
   );
};

export default ViewCard;
