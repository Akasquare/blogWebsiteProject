import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { MessageCircleMore, ThumbsUp, Share2, Bookmark } from "lucide-react";
import ProfileCircle from "./ProfileCircle";

const Card = ({ data }) => {
   const url = `http://localhost:5173/post/${data._id}`;
   const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${data.title} - Read more: ${url}`
   )}`;

   

   return (
      <>
         <div className=" mx-auto pb-4 w-[100%]">
            <div className="flex justify-between gap-x-4">
               <div className="flex flex-col gap-y-2">
                  <Link  to={`/post/${data?._id}`}>
                     <h2 className="text-2xl/7 pt-2 font-bold">{data?.title}</h2>
                     <div className="text-sm text-zinc-700 ">
                        <p>
                           {data?.description
                              ? data?.description.substring(0, 210) + "..."
                              : ""}
                        </p>
                     </div>
                  </Link>
                  <div className="flex text-sm justify-between pt-5 items-center">
                     <div className="flex gap-x-3">
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={`/post/${data?._id}`}
                        >
                           <ThumbsUp className="w-4 h-4 text-gray-700 " />
                           {data?.likes?.length}
                        </Link>
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={`/post/${data?._id}`}
                        >
                           <MessageCircleMore className="w-4 h-4 text-gray-700" />
                           {data?.reviews?.length}
                        </Link>
                        <p className="text-sm  ">
                           {new Date(data?.createdAt).toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                           })}{" "}
                        </p>
                     </div>
                     <div className="flex gap-x-4">
                        <Link
                           className=" flex  gap-x-2 items-center"
                           to={`/post/${data?._id}`}
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

               {data?.image && (
                  <img
                     className="h-30 w-40 rounded-lg"
                     src={data.image}
                     alt=""
                  />
               )}
            </div>
         </div>
         <hr className=" text-gray-200 pb-3" />
      </>
   );
};

export default Card;
