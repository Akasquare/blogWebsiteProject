import React ,{useState, useEffect}from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import ProfileCircle from "./ProfileCircle";

const headerStyle = {
   padding: "0 30px 0 10px",
   display: "flex",
   alignItems: "center",
   position: "fixed",
   top: "0",
   width: "100%",
   height: "13vh",
   justifyContent: "space-between",
   color: "#242424",
   backgroundColor: "#ffffffff",
   borderBottom: "1px solid #000",
};
// const linkStyle = {
//   display: "flex",
//   alignItems: "center",
//   textAlign: "center",
//   gap: "10px",
//   justifyContent: 'space-between',
//   color: "#242424",
//   textDecoration: "none !important",
// };
const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const info = localStorage.getItem("logedIn");
    if (info) {
 
      setUser(JSON.parse(info).user);

    }
  }, []);
  
   const handleLogout = () => {
      localStorage.removeItem("logedIn"); 
      setUser(null);
      window.location.href = "/";
   };
   return (
      <>
         <div style={headerStyle}>
            <h2 className="text-3xl font-bold">
               <Link to={"/"}>Medium</Link>
            </h2>
            <div className="flex gap-x-5 text-sm items-center">
               <Link to={"/ourstory"}>Our story</Link>
               <Link to={"/write"}>Write</Link>
               {user?.name ? (
                  <>
                  <button onClick={handleLogout}>Logout</button>
                  <Link className=" flex  gap-x-3 items-center" to={ `@${user.name}`}>
                  <ProfileCircle size='h-12 w-12' image={user.profileImage}/>
                  </Link>
                  </>

               ) : (
                  <>
                     <Link to="/signup">Sign Up</Link>
                     <Link to="/login">
                        <Button text="Login" />
                     </Link>
                  </>
               )}
            </div>
         </div>
      </>
   );
};

export default Header;
