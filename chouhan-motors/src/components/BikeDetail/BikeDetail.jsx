import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ScheduleTestDrive from "../ScheduleTestDrive/ScheduleTestDrive";

const BikeDetail = ({ bike, onClose }) => {
  const navigate = useNavigate();
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  if (!bike) return null;

  return (
    <>
      {/* Show BikeDetail modal only if ScheduleTestDrive is NOT open */}
      {!isScheduleOpen ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.9 }} 
            className="bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-hidden relative"
          >
            {/* Close Button (Top-Right) */}
            <button 
              className="absolute top-3 right-3 bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
              onClick={onClose}
            >
              ✕
            </button>

            <div className="relative">
              <img src={bike.image} alt={bike.name} className="w-full h-56 object-cover" />
            </div>

            <div className="p-6 text-center">
              <h2 className="text-3xl font-bold text-gray-800">{bike.name}</h2>
              <p className="text-gray-600 mt-2">{bike.description}</p>
              <p className="text-lg font-semibold text-red-600 mt-2">Price: {bike.price}</p>

              <div className="mt-6 flex justify-center gap-4">
                <button 
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </button>
                <button 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  onClick={() => setIsScheduleOpen(true)} // Open Schedule Test Drive Form
                >
                  Schedule Test Drive
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      ) : (
        /* Show Test Drive form when ScheduleTestDrive is opened */
        <ScheduleTestDrive bikeName={bike.name} onClose={() => setIsScheduleOpen(false)} />
      )}
    </>
  );
};

BikeDetail.propTypes = {
  bike: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BikeDetail;
