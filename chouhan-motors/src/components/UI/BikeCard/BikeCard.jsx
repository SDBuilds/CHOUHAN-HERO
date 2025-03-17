import PropTypes from "prop-types";
import Button from "../Button/Button";

const BikeCard = ({ bike, onViewDetails }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden w-80 bg-white shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg h-full flex flex-col">
      <img src={bike.image} alt={bike.name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center flex flex-col flex-grow justify-between">
        <div className="flex-grow min-h-[120px]">
          <h3 className="text-xl font-semibold text-gray-800">{bike.name}</h3>
          <p className="text-gray-600 mt-2">{bike.description}</p>
          <p className="text-lg font-bold text-red-600 mt-2">Price: {bike.price}</p>
        </div>
        <div className="mt-4">
          <Button 
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
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
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onViewDetails: PropTypes.func.isRequired,
};

export default BikeCard;
