import React from "react";

const ReviewCard = ({post}) => {

   return (
      <div className="flex py-4 flex-col gap-x-4 border-t border-b border-zinc-300">
         <div className="flex gap-x-4 pb-6 items-center">
            <img
               className=" w-10 h-10 rounded-3xl"
               src={post.author.profileImage}
               alt=""
            />
            <h1>{post.author.name}</h1>
         </div>
         <p>Egor Howell presents an exciting guide to mastering AI, featuring essential resources split into five key areas:</p>

      </div>
   );
};

export default ReviewCard;
