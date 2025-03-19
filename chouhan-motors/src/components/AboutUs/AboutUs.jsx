import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12 mt-24 max-w-7xl flex-grow flex flex-col lg:flex-row items-center gap-10 bg-gray-100 rounded-lg shadow-md">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-red-600 mb-6">About Chouhan Motors</h1>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to Chouhan Motors, your trusted Hero MotoCorp dealership dedicated to delivering
            exceptional two-wheeler sales, service, and customer satisfaction.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Chouhan Motors, we are passionate about bringing the joy of riding to our customers. As an
            authorized Hero MotoCorp dealership, we offer the latest range of Hero motorcycles and scooters,
            ensuring you find the perfect ride to match your lifestyle.
          </p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            <li>
              <span className="text-red-600 font-semibold">✔ Extensive Range</span> – Explore the full lineup of Hero bikes and scooters,
              from fuel-efficient commuters to performance-driven machines.
            </li>
            <li>
              <span className="text-red-600 font-semibold">✔ Customer-Centric Approach</span> – Our knowledgeable and friendly team is
              here to guide you every step of the way, from choosing the right bike to financing options.
            </li>
            <li>
              <span className="text-red-600 font-semibold">✔ Authorized Service & Genuine Parts</span> – Keep your Hero bike running
              smoothly with expert servicing, genuine spare parts, and top-notch maintenance.
            </li>
            <li>
              <span className="text-red-600 font-semibold">✔ Hassle-Free Experience</span> – From test rides to paperwork, we ensure a
              seamless and hassle-free buying experience.
            </li>
          </ul>

          {/* Contact Us Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button onClick={() => navigate("/contact")}>Contact Us</Button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/assets/about_us.JPG" 
            alt="About Chouhan Motors"
            className="rounded-lg shadow-lg w-full max-w-md transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
