import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const CategoryCard = ({ category, image, description, externalLink, subcategories = [] }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isExternal = Boolean(externalLink);
  const hasSubcategories = subcategories.length > 0;

  return (
    <div
      className="relative w-64 h-72 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-300 m-3 group"
      onMouseEnter={() => hasSubcategories && setIsDropdownOpen(true)}
      onMouseLeave={() => hasSubcategories && setIsDropdownOpen(false)}
    >
      {isExternal ? (
        <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          {/* Image Section */}
          <img src={image} alt={category} className="w-full h-full object-cover" />

          {/* Overlay Section */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-semibold transition-colors duration-300 group-hover:text-red-500">
              {category}
            </h3>
            <p className="text-gray-300 text-sm mt-1">{description}</p>
          </div>
        </a>
      ) : (
        <div className="block w-full h-full relative">
          <Link to={`/category/${category.toLowerCase()}`} className="block w-full h-full">
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

          {/* Subcategories Dropdown */}
          {hasSubcategories && isDropdownOpen && (
            <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg z-10">
              {subcategories.map((subcategory) => (
                <li key={subcategory} className="border-b last:border-none">
                  <Link
                    to={`/category/${category.toLowerCase()}/${subcategory.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    {subcategory}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  externalLink: PropTypes.string, // Optional for external links
  subcategories: PropTypes.arrayOf(PropTypes.string), // Optional for subcategories
};

export default CategoryCard;
