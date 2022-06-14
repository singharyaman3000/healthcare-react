import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useState } from "react";
import Service from "./pages/Service/Service";
import Doctor from "./pages/Doctors/Doctor";
import Finddoctor from "./pages/Finddoctors/Finddoctor";
import Location from "./pages/Location/Location";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Career from "./pages/Career/Career";
import Footer from "./pages/Home/Footer";
import Patientinfo from "./pages/Patientinfo/Patientinfo";
import Contact from "./pages/Contact/Contact";
import Onlinebill from "./pages/Onlinebill/Onlinebill";
import Servicedetail from "./pages/Service/Servicedetail";
import Blogdetail from "./pages/Blog/Blogdetail";
import Careerdetail from "./pages/Career/Careerdetail";
import Testimonial from "./pages/Career/Testimonial";
// import { doctors } from "./pages/Doctors/Doctor";
import DoctorProfile from "./pages/Doctors/DoctorProfile";
import Scrollbtn from "./components/Scrollbtn";
import Patientdetail from "./pages/Patientinfo/Patientdetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/signup/Login";
import Profile from "./pages/signup/Profile";
function App() {
  const [show, setShow] = useState(true);
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("currentuser") ? true : false
  );
  return (
    <div>
      <Router>
        {!isLogin ? null : <Navbar setIsLogin={setIsLogin} />}
        <Routes>
          <Route
            path="/"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Home setShow={setShow} />
              )
            }
          />
          <Route
            path="/service"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Service setShow={setShow} />
              )
            }
          />
          <Route
            path="/our-doctor"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Doctor setShow={setShow} />
              )
            }
          />
          <Route
            path="/find-doctor"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Finddoctor setShow={setShow} />
              )
            }
          />
          <Route
            path="/location"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Location setShow={setShow} />
              )
            }
          />
          <Route
            path="/about"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <About setShow={setShow} />
              )
            }
          />
          <Route
            path="/blog"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Blog setShow={setShow} />
              )
            }
          />
          <Route
            path="/career"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Career setShow={setShow} />
              )
            }
          />
          <Route
            path="/online-bill"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Onlinebill setShow={setShow} />
              )
            }
          />
          <Route
            path="/patient-info"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Patientinfo setShow={setShow} />
              )
            }
          />
          <Route
            path="/contact"
            element={
              !isLogin ? (
                <Login setIsLogin={setIsLogin} />
              ) : (
                <Contact setShow={setShow} />
              )
            }
          />
          {/* <Route
            path="/service-detail/:service_id"
            element={!isLogin?<Login/>:<Servicedetail />}
          /> */}
          <Route
            path="/blog-detail"
            element={
              !isLogin ? <Login setIsLogin={setIsLogin} /> : <Blogdetail />
            }
          />
          <Route
            path="/career-detail"
            element={
              !isLogin ? <Login setIsLogin={setIsLogin} /> : <Careerdetail />
            }
          />
          <Route
            path="/testimonial"
            element={
              !isLogin ? <Login setIsLogin={setIsLogin} /> : <Testimonial />
            }
          />
          {/* {Doctors.map((doctor) => (
            <Route
              path={`/${doctor.username}`}
              element={!isLogin?<Login/>:<DoctorProfile doctorinfo={doctor} />}
            />
          ))} */}
          <Route
            path="/our-doctor/:d_id"
            element={
              !isLogin ? <Login setIsLogin={setIsLogin} /> : <DoctorProfile />
            }
          />
          <Route
            path="/service/:id"
            element={
              !isLogin ? <Login setIsLogin={setIsLogin} /> : <Servicedetail />
            }
          />
          <Route
            path="/patient-info/:id"
            element={
              !isLogin ? <Login setIsLogin={setIsLogin} /> : <Patientdetail />
            }
          />

          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/profile"
            element={!isLogin ? <Login setIsLogin={setIsLogin} /> : <Profile />}
          />
        </Routes>
        <ToastContainer position="top-center" />
        {!isLogin ? null : <Footer show={show} />}
        <Scrollbtn />
      </Router>
    </div>
  );
}

export default App;
