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
import Doctors from "./pages/Doctors/Doctors";
import DoctorProfile from "./pages/Doctors/DoctorProfile";
import Scrollbtn from "./components/Scrollbtn";
import Patientdetail from "./pages/Patientinfo/Patientdetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setShow={setShow} />} />
          <Route path="/service" element={<Service setShow={setShow} />} />
          <Route path="/our-doctor" element={<Doctor setShow={setShow} />} />
          <Route
            path="/find-doctor"
            element={<Finddoctor setShow={setShow} />}
          />
          <Route path="/location" element={<Location setShow={setShow} />} />
          <Route path="/about" element={<About setShow={setShow} />} />
          <Route path="/blog" element={<Blog setShow={setShow} />} />
          <Route path="/career" element={<Career setShow={setShow} />} />
          <Route
            path="/online-bill"
            element={<Onlinebill setShow={setShow} />}
          />
          <Route
            path="/patient-info"
            element={<Patientinfo setShow={setShow} />}
          />
          <Route path="/contact" element={<Contact setShow={setShow} />} />
          {/* <Route
            path="/service-detail/:service_id"
            element={<Servicedetail />}
          /> */}
          <Route path="/blog-detail" element={<Blogdetail />} />
          <Route path="/career-detail" element={<Careerdetail />} />
          <Route path="/testimonial" element={<Testimonial />} />
          {/* {Doctors.map((doctor) => (
            <Route
              path={`/${doctor.username}`}
              element={<DoctorProfile doctorinfo={doctor} />}
            />
          ))} */}
          <Route path="/our-doctor/:d_id" element={<DoctorProfile />} />
          <Route path="/service/:id" element={<Servicedetail />} />
          <Route path="/patient-info/:id" element={<Patientdetail />} />
        </Routes>
        <ToastContainer position="top-center" />
        <Footer show={show} />
        <Scrollbtn />
      </Router>
    </div>
  );
}

export default App;
