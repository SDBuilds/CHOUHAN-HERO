import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Motors.png";

const Navbar = () => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let inventoryTimeout, servicesTimeout;

  const handleMouseEnter = (setDropdown) => {
    clearTimeout(inventoryTimeout);
    clearTimeout(servicesTimeout);
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown) => {
    inventoryTimeout = setTimeout(() => setDropdown(false), 200); // Small delay before closing
  };

  useEffect(() => {
    return () => {
      clearTimeout(inventoryTimeout);
      clearTimeout(servicesTimeout);
    };
  }, [inventoryTimeout, servicesTimeout]);

  return (
    <>
      <nav className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-4 shadow-lg fixed top-0 w-full z-50">
        <div className="w-full flex justify-between items-center px-6 relative">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-2" />
          </Link>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <ul className={`md:flex space-x-8 text-lg font-medium ${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
            <li><Link to="/" className="hover:text-yellow-300 transition">HOME</Link></li>
            <li><Link to="/aboutus" className="hover:text-yellow-300 transition">ABOUT US</Link></li>

            {/* Inventory Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter(setIsInventoryOpen)}
              onMouseLeave={() => handleMouseLeave(setIsInventoryOpen)}
            >
              <Link to="/category/all" className="text-gray-200 hover:text-gray-400">INVENTORY</Link>
              {isInventoryOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <li><Link to="/category/bikes" className="block px-4 py-2 hover:bg-gray-200">Bikes</Link></li>
                  <li><Link to="/category/scooters" className="block px-4 py-2 hover:bg-gray-200">Scooters</Link></li>
                  <li><Link to="/category/electric" className="block px-4 py-2 hover:bg-gray-200">Electric</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/contact" className="hover:text-yellow-300 transition">CONTACT US</Link></li>

            {/* Our Services Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter(setIsServicesOpen)}
              onMouseLeave={() => handleMouseLeave(setIsServicesOpen)}
            >
              <Link to="/services" className="text-gray-200 hover:text-gray-400">OUR SERVICES</Link>
              {isServicesOpen && (
                <ul className="absolute right-0 mt-2 w-fit min-w-[200px] bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <li><Link to="/contact?department=sales" className="block px-4 py-2 hover:bg-gray-200">Sales</Link></li>
                  <li><Link to="/contact?department=service" className="block px-4 py-2 hover:bg-gray-200">Service</Link></li>
                  <li><Link to="/contact?department=sparepart" className="block px-4 py-2 hover:bg-gray-200">Spare Parts</Link></li>
                  <li><Link to="/contact?department=finance" className="block px-4 py-2 hover:bg-gray-200">Finance</Link></li>
                  <li><Link to="/contact?department=insurance" className="block px-4 py-2 hover:bg-gray-200">Insurance</Link></li>
                  <li><Link to="/exchange" className="block px-4 py-2 hover:bg-gray-200">Exchange Your Bike</Link></li>
                </ul>
              )}
            </li> 
          </ul>
        </div>
      </nav>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;