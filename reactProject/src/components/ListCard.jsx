import ProfileCircle from "./ProfileCircle";

const ListCard = ({ data }) => {
   
   return (
      <>
      
         <div className="bg-zinc-100 w-[100%] flex rounded-md">
            <div className="flex flex-col p-5 bg-red-100 w-[68%] gap-y-4">
               <div>
                  {data && (
                     <ProfileCircle
                        size="h-5 w-5"
                        image={data.profileImage}
                        name={data.name}
                     />
                  )}
               </div>
               <h1 className="font-bold">Reading Lists</h1>
               <h1 className="text-sm">{data.savedPosts.length} stories</h1>
            </div>
            <div className="pr-1  bg-purple-100 w-[15%] ">
                   d
            </div>
            <div className="pr-1 w-[10%] ">
                f   
            </div>
            <div className=" w-[5%] ">
                  c 
            </div>
         </div>
      </>
   );
};

export default ListCard;
