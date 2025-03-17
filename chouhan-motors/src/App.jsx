import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Bikes from "./components/Bikes/Bikes";
import BikeDetails from "./components/BikeDetail/BikeDetail";
import Footer from "./components/Footer/Footer";
import CategoryCard from "./components/UI/CategoryCard/CategoryCard";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import OurServices from "./components/OurServices/OurServices";
import Exchange from "./components/Exchange/Exchange";
import Slider from "./components/UI/Slider/Slider";
import { Link } from "react-router-dom";
import "./index.css";

import motorcyclesImage from "./assets/XpulseCatCard.jpg";
import premiumImage from "./assets/Xtreme250RCatCard.jpg";
import scootersImage from "./assets/Xoom160CatCard.jpg";
import upcomingImage from "./assets/VidaCatCard.webp";


const categories = [
  {
    name: "Motorcycles",
    image: motorcyclesImage,
    description: "Explore our range of motorcycles",
    path: "motorcycles",
  },
  {
    name: "Premium",
    image: premiumImage,
    description: "Discover our premium bikes",
    path: "premium",
  },
  {
    name: "Scooters",
    image: scootersImage,
    description: "Check out our scooters",
    path: "scooters",
  },
  {
    name: "Upcoming Launches",
    image: upcomingImage,
    description: "Stay tuned for upcoming launches",
    path: "upcoming",
  },
];

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar className="sticky top-0 w-full z-50 bg-white shadow-md" />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <div className="container mx-auto px-4">
                  {/* Slider */}
                  <div className="my-10">
                    <Slider />
                  </div>

                  {/* About Us Section */}
                  <div className="my-8">
                    <AboutUs />
                  </div>

                  {/* Categories Section */}
                  <div className="flex flex-wrap justify-center gap-4 px-4">
                    {categories.map((category) => (
                      <Link
                        to={`/category/${category.path}`}
                        key={category.name}
                        className="block transform hover:scale-105 transition"
                      >
                        <CategoryCard
                          category={category.name}
                          image={category.image}
                          description={category.description}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              }
            />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/category/:category" element={<Bikes />} />
            <Route path="/bikes/:id" element={<BikeDetails />} />
          </Routes>
        </main>
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
};

export default App;
