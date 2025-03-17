import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ScheduleTestDrive = ({ bikeName, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    bike: bikeName || "",
    date: "",
    preferredTimeSlot: "",
  });

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative"
      >
        {/* Close Button */}
        <button 
          className="absolute top-3 right-3 bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">Schedule Your Test Drive</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600" onChange={handleInputChange} />
          <input type="tel" name="contact" required placeholder="Contact Number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600" onChange={handleInputChange} />
          <input type="text" name="bike" value={formData.bike} readOnly className="w-full p-3 border rounded-lg bg-gray-100" />
          <input type="date" name="date" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600" onChange={handleInputChange} />
          <select name="preferredTimeSlot" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600" onChange={handleInputChange}>
            <option value="">Select Preferred Time Slot</option>
            <option value="Morning (9:00 AM - 11:00 AM)">Morning (9:00 AM - 11:00 AM)</option>
            <option value="Noon (12:00 PM - 2:00 PM)">Noon (12:00 PM - 2:00 PM)</option>
            <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM - 6:00 PM)</option>
          </select>

          <div className="text-center">
            <button type="submit" className="bg-red-600 text-white py-3 px-6 rounded-lg w-full">
              {isSubmitting ? "Submitting..." : "Schedule Test Drive"}
            </button>
          </div>
        </form>

        {result && <p className="text-center text-green-600 mt-4 font-medium">{result}</p>}
      </motion.div>
    </div>
  );
};

ScheduleTestDrive.propTypes = {
  bikeName: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ScheduleTestDrive;
