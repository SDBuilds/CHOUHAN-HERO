import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BikeCard from "../UI/BikeCard/BikeCard";
import BikeDetail from "../BikeDetail/BikeDetail";
import bikesData from "../Data/bikes.json";

const Bikes = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [bikes, setBikes] = useState([]);
  const [selectedBike, setSelectedBike] = useState(null);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to navigate to subcategory
  const handleSubcategoryChange = (sub) => {
    navigate(`/category/${category}/${sub.toLowerCase()}`);
  };

  useEffect(() => {
    let filteredBikes = bikesData;
  
    if (category && category !== "all") {
      filteredBikes = filteredBikes.filter((bike) => bike.category.toLowerCase() === category.toLowerCase());
    }
  
    if (subcategory) {
      if (subcategory.toLowerCase() === "premium") {
        // Include bikes from both "category": "Premium" and "subcategory": "Premium"
        filteredBikes = bikesData.filter(
          (bike) =>
            bike.category.toLowerCase() === "premium" || bike.subcategory?.toLowerCase() === "premium"
        );
      } else {
        // Regular filtering for other subcategories
        filteredBikes = filteredBikes.filter((bike) => bike.subcategory?.toLowerCase() === subcategory.toLowerCase());
      }
    }
  
    setBikes(filteredBikes);
  }, [category, subcategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "0d6741d0-8f50-43ea-bf82-09e284df7765"); // Web3Forms API Key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (data.success) {
      setResult("Test Drive Scheduled Successfully!");
      e.target.reset();
    } else {
      setResult("Error: " + data.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      
      {/* Subcategory Filter Buttons */}
      {category === "motorcycles" && (
        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => handleSubcategoryChange("100CC")} 
            className={`px-4 py-2 rounded-md ${subcategory === "100cc" ? "bg-red-600 text-white" : "bg-gray-300"}`}
          >
            100CC
          </button>
          <button 
            onClick={() => handleSubcategoryChange("125CC")} 
            className={`px-4 py-2 rounded-md ${subcategory === "125cc" ? "bg-red-600 text-white" : "bg-gray-300"}`}
          >
            125CC
          </button>
          <button 
            onClick={() => handleSubcategoryChange("Premium")} 
            className={`px-4 py-2 rounded-md ${subcategory === "premium" ? "bg-red-600 text-white" : "bg-gray-300"}`}
          >
            Premium
          </button>
        </div>
      )}
      

      {/* Display Bike Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} onViewDetails={() => setSelectedBike(bike)} />
        ))}
      </div>

      {selectedBike && <BikeDetail bike={selectedBike} onClose={() => setSelectedBike(null)} />}
      <div className="mt-8 w-full max-w-4xl bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Schedule Your Test Drive</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <input type="hidden" name="form_type" value="Test Drive Request - Bikes Page" />

          <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600" />
          <input type="tel" name="contact" required placeholder="Contact Number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600" />
          <select name="bike" required className="w-full p-3 border rounded-lg col-span-2 focus:ring-2 focus:ring-red-600">
            <option value="">Select Bike</option>
            {bikes.map((bike) => (
              <option key={bike.id} value={bike.name}>{bike.name}</option>
            ))}
          </select>
          <input type="date" name="date" required className="w-full p-3 border rounded-lg col-span-2 focus:ring-2 focus:ring-red-600" />
          <select name="preferredTimeSlot" required className="w-full p-3 border rounded-lg col-span-2 focus:ring-2 focus:ring-red-600">
            <option value="">Select Preferred Time Slot</option>
            <option value="Morning (9:00 AM - 11:00 AM)">Morning (9:00 AM - 11:00 AM)</option>
            <option value="Noon (12:00 PM - 2:00 PM)">Noon (12:00 PM - 2:00 PM)</option>
            <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
          </select>

          <div className="col-span-2 flex justify-center">
            <button type="submit" className="bg-red-600 text-white py-3 px-6 rounded-lg">
              {isSubmitting ? "Submitting..." : "Schedule Test Drive"}
            </button>
          </div>
        </form>

        {result && <p className="text-center text-green-600 mt-4 font-medium">{result}</p>}
      </div>
    </div>
    
  );
};

export default Bikes;
