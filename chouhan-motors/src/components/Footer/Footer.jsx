import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-8">
        <p className="flex items-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          123 Hero Street, Motor City, IN 12345
        </p>
        <p className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          Sales: +1 (123) 456-7890
        </p>
        <p className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          Service: +1 (123) 456-7891
        </p>
        <p className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          contact@chouhanmotors.com
        </p>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>&copy; 2025 Chouhan Motors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
