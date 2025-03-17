import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CategoryCard = ({ category, image, description }) => {
  return (
    <div className="relative w-64 h-72 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-300 m-3 group">
      <Link to={`/category/${category}`} className="block w-full h-full">
        {/* Image Section */}
        <img src={image} alt={category} className="w-full h-full object-cover" />

        {/* Overlay Section */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white text-xl font-semibold transition-colors duration-300 group-hover:text-red-500">
            {category}
          </h3>
          <p className="text-gray-300 text-sm mt-1">{description}</p>
        </div>
      </Link>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CategoryCard;
