import { useState ,useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const MainContent = () => {
  const [post, setPost] = useState(null);
   async function getData() {
      let res = await axios.get("http://localhost:8000/post");
      setPost(res.data.post);
   }
   useEffect(() => {
      getData();
   }, []);
  return (
    
      <div className="p-10 ">
          {
          
          post && post.map((itm) => {
            return (
              <>
                <div className="pb-4"> 
                  <Card data={itm} />
                </div>
              </>
            );
          })}
        
    </div>
  )
}

export default MainContent