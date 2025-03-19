import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Slider from "./components/UI/Slider/Slider";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurServices from "./components/OurServices/OurServices";
import Exchange from "./components/Exchange/Exchange";
import Bikes from "./components/Bikes/Bikes";
import BikeDetails from "./components/BikeDetail/BikeDetail";
import CategoryList from "./components/CategoryList/CategoryList";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar className="sticky top-0 w-full z-50 bg-white shadow-md" />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <div className="container mx-auto px-4">
                  {/* Slider Section */}
                  <div className="my-10">
                    <Slider />
                  </div>

                  {/* Categories Section */}
                  <div className="my-8">
                    <CategoryList />
                  </div>
                </div>
              }
            />

            {/* Static Pages */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/exchange" element={<Exchange />} />

            {/* Dynamic Routes for Bikes */}
            <Route path="/category/:category" element={<Bikes />} />
            <Route path="/category/:category/:subcategory" element={<Bikes />} />
            <Route path="/bikes/:id" element={<BikeDetails />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
};

export default App;
