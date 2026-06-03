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
import Library from "./pages/Library";
import ViewCard from "./components/ViewCard";
import UserHome from "./components/UserHome";
import UserList from "./components/UserList";
import UserAbout from "./components/UserAbout";
import Write from "./pages/Write";
import YourLists from "./components/YourLists";
import ReadingListPage from "./pages/ReadingListPage";
import Rules from "./pages/Rules";
import About from "./pages/About";
import Help from "./pages/Help";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
   return (
      <>
         <Header />
         <div className=" pt-[10vh] h-[100%] ">
            <Routes>
               <Route path={"/"} element={<Home />}>
                  <Route index element={<MainContent />} />
                  <Route path={"post/:id"} element={<ViewCard />} />
                  <Route path={"rules"} element={<Rules />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />

                  <Route path="/rules" element={<Rules />} />
                  <Route
                     path={"/user/:id/readingListPage"}
                     element={<ReadingListPage />}
                  />
                  <Route path={"user/:id/profile"} element={<Profile />}>
                     <Route index element={<UserHome />} />
                     <Route path={"home"} element={<UserHome />} />
                     <Route path={"list"} element={<UserList />} />
                     <Route path={"about"} element={<UserAbout />} />
                  </Route>
                  <Route path={"user/:id/library"} element={<Library />}>
                     <Route index element={<YourLists />} />
                     <Route path={"yourList"} element={<YourLists />} />
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
