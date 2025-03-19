import PropTypes from "prop-types";
import Button from "../Button/Button";

const BikeCard = ({ bike, onViewDetails }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden w-80 bg-white shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col">
      
      {/* Bike Image */}
      <div className="relative">
        <img src={bike.image} alt={bike.name} className="w-full h-52 object-contain p-4" />
      </div>

      {/* Bike Details */}
      <div className="p-5 text-center flex flex-col flex-grow">

        {/* Bike Name */}
        <h3 className="text-gray-600 text-xl font-semibold italic uppercase">
          {bike.name}
        </h3>

        {/* View Details Button */}
        <div className="mt-5">
          <Button 
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition w-full"
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

BikeCard.propTypes = {
  bike: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cc: PropTypes.string.isRequired,
    torque: PropTypes.string.isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default BikeCard;
