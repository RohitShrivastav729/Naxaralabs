import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import WhatsappButton from "./components/sections/WhatsappButton"
import SeoManager from "./seo/SeoManager";

function App() {
  return(
    <>
      <SeoManager />
      <div className="app-wrapper">
        <Navbar /> 

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
        <WhatsappButton />
      </div>
    </>
  )
}

export default App;