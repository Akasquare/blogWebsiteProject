import React, { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const ReviewCard = ({ id, review ,onDelete }) => {


   async function deleteReviw() {
      try{
         const resData = await axios.delete(
            `http://localhost:8000/comment/${review._id}`
         );
         if (resData.data.success) {
            // ✅ call parent callback to update UI
            onDelete(review._id);
         }

      }catch (err) {
         console.error(err);
      }
       
   }
   let { loggedInUser } = useContext(UserDataContext);

   return (
      <div className="flex p-4 py-4 flex-col rounded-xl border-t border-b bg-zinc-200 border-zinc-300">
         <div className="flex gap-x-4 pb-4 items-center">
            <img
               className=" w-6 h-6 rounded-3xl"
               src={review.author.profileImage.url}
               alt=""
            />
            <h1>{review.author.name}</h1>
         </div>
         <div className="flex flex-col gap-y-4  ">
            <p>{review.comment}</p>
            <div className="flex justify-between items-center">
               <p className="text-sm  ">
                  {new Date(review.createdAt).toLocaleString("en-US", {
                     month: "short",
                     day: "numeric",
                     year: "numeric",
                     hour: "2-digit",
                     minute: "2-digit",
                  })}
               </p>
               {loggedInUser && loggedInUser._id === review.author._id && (
                  <Link onClick={deleteReviw} >
                     <Button text="delete" />
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export default ReviewCard;
