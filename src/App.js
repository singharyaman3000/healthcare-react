import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Doctor from "./pages/Doctor";
import Finddoctor from "./pages/Finddoctor";
import Location from "./pages/Location";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/our-doctor" element={<Doctor />} />
          <Route path="/find-doctor" element={<Finddoctor />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
