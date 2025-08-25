import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import OurStory from "./pages/OurStory";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
// import Form from "./Form";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Library from  './pages/Library';
import ViewCard from "./components/ViewCard";
import UserHome from "./components/UserHome";
import UserList from "./components/UserList";
import UserAbout from "./components/UserAbout";
import Write from "./pages/Write";

function App() {
   return (
      <>
         <Header />
         <div className=" pt-[10vh] ">
            <Routes>
               <Route path={"/"} element={<Home />}>
                  <Route index element={<MainContent />} />
                  <Route path={"post/:id"} element={<ViewCard />} />
                  <Route path={"user/:id/profile"} element={<Profile />}>
                     <Route index element={<UserHome />} />
                     <Route path={"home"} element={<UserHome />} />
                     <Route path={"list"} element={<UserList />} />
                     <Route path={"about"} element={<UserAbout />} />
                  </Route>
                  <Route path={"user/:id/library"} element={<Library />}>
                     <Route index element={<UserHome />} />
                     <Route path={"yourList"} element={<UserHome />} />
                     <Route path={"readinghistory"} element={<UserList />} />
                     {/* <Route path={"about"} element={<UserAbout />} /> */}
                  </Route>
               </Route>

               <Route path={"/signup"} element={<SignUp />} />
               <Route path={"/login"} element={<Login />} />
               <Route path={"/write"} element={<Write />} />
               <Route path={"/ourstory"} element={<OurStory />} />
            </Routes>
         </div>
         <Footer />
      </>
   );
}

export default App;
