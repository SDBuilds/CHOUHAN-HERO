import PropTypes from "prop-types";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      className="relative w-full bg-red-700 text-white py-3 rounded-lg text-lg font-bold shadow-md overflow-hidden transition-all duration-300 ease-in-out
      hover:bg-red-800 hover:shadow-lg hover:scale-105 group"
      onClick={onClick}
    >
      <span className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-all duration-300"></span>
      <span className="relative z-10 tracking-wide uppercase">{children}</span>

      {/* Speedy Animated Line (Sporty Look) */}
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>

      {/* Sleek Top Glow (Gives a Metal Look) */}
      <span className="absolute top-0 left-0 w-full h-[3px] bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
