import React, { useState, useEffect, useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import ProfileCircle from "./ProfileCircle";
import { UserDataContext } from "../context/userContext";
import { SquarePen } from "lucide-react";
const headerStyle = {
   padding: "0 30px 0 10px",
   display: "flex",
   alignItems: "center",
   position: "fixed",
   top: "0",
   width: "100%",
   height: "10vh",
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
   const { loggedInUser } = useContext(UserDataContext);
   console.log(loggedInUser)

   const handleLogout = () => {
      localStorage.removeItem("logedIn");
      setUser(null);
      window.location.href = "/";
   };
   return (
      <>
         <div style={headerStyle}>
            <h2 className="text-3xl font-bold">
               <Link to={"/"}>BlogStack</Link>
            </h2>
            <div className="flex gap-x-5 text-sm items-center">
               <SquarePen className="w-6 h-6 text-gray-700" />
               <Link to={"/write"}>Write</Link>
               {loggedInUser ? (
                  <>
                     <button onClick={handleLogout}>Logout</button>
                     <Link
                        className=" flex  gap-x-3 items-center"
                        to={`/user/${loggedInUser._id}/profile`}
                     >
                        <ProfileCircle
                           size="h-12 w-12"
                           image={loggedInUser.profileImage}
                        />
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
