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
      {!isScheduleOpen ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-xl overflow-hidden relative p-6"
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 bg-gray-600 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition"
              onClick={onClose}
            >
              ✕
            </button>

            {/* Bike Name */}
            <h2 className="text-gray-500 text-2xl font-semibold italic text-center mt-2 uppercase">
              {bike.name}
            </h2>

            {/* Bike Image */}
            <div className="flex justify-center my-4">
              <img src={bike.image} alt={bike.name} className="w-full max-w-md object-contain" />
            </div>

            {/* Specifications Section */}
            <div className="flex justify-center gap-6 text-center border-t border-gray-300 pt-4">
              <div>
                <p className="text-gray-500 text-sm uppercase">Engine</p>
                <p className="text-black text-lg font-bold">{bike.cc} <span className="text-sm">cc</span></p>
              </div>
              <div className="border-l border-gray-300 px-6">
                <p className="text-gray-500 text-sm uppercase">Max. Torque</p>
                <p className="text-black text-lg font-bold">{bike.torque} <span className="text-sm">nm</span></p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-center gap-4">
  <button
    className="border-2 border-red-600 text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition"
    onClick={() => navigate("/contact")}
  >
    Contact Us
  </button>
  <button
    className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
    onClick={() => setIsScheduleOpen(true)}
  >
    Request Test Drive
  </button>
</div>

          </motion.div>
        </div>
      ) : (
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
