import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { MessageCircleMore, ThumbsUp, Share2, Bookmark } from "lucide-react";
import ProfileCircle from "./ProfileCircle";

const Card = ({ data }) => {
   console.log(data);
   const url = `http://localhost:5173/post/${data._id}`;
   const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${data.title} - Read more: ${url}`
   )}`;
   return (
      <>
         <div className=" mx-auto pb-4 w-[100%]">
            <div className="flex gap-x-4">
               <div className="flex flex-col gap-y-2">
                  <Link to={`/post/${data._id}`}>
                     <h2 className="text-2xl/7 pt-2 font-bold">{data.title}</h2>
                     <p className="text-sm text-zinc-700 ">
                        {data.description}
                     </p>
                  </Link>
                  <div className="flex text-sm justify-between pb-3 items-center">
                     <div className="flex gap-x-3">
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={"/ourstory"}
                        >
                           <ThumbsUp className="w-4 h-4 text-gray-700 " />
                           1.7k
                        </Link>
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={"/ourstory"}
                        >
                           <MessageCircleMore className="w-4 h-4 text-gray-700" />
                           112
                        </Link>
                        <p className="text-sm  ">
                           {new Date(data.createdAt).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                           })}{" "}
                        </p>
                     </div>
                     <div className="flex gap-x-4">
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={"/ourstory"}
                        >
                           <Bookmark className="w-4 h-4 text-gray-700" />
                        </Link>
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={whatsappUrl}
                        >
                           <Share2 className="w-4 h-4 text-gray-700" />
                        </Link>
                     </div>
                  </div>
               </div>
               
               <img className="h-30 w-40 rounded-lg" src={data.image} alt="" />
            </div>
         </div>
         <hr className=" text-gray-200 pb-3" />
      </>
   );
};

export default Card;
