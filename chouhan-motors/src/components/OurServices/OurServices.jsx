import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const navigate = useNavigate();

  const services = [
    { title: "Sales", description: "Discover the latest Hero MotoCorp motorcycles and scooters.", icon: "🏍️", path: "contact?department=sales" },
    { title: "Service", description: "Keep your bike in top condition with expert servicing.", icon: "🛠️", path: "contact?department=service" },
    { title: "Spare Parts", description: "We provide genuine Hero MotoCorp spare parts.", icon: "⚙️", path: "contact?department=sparepart" },
    { title: "Finance", description: "Get easy financing options with flexible EMI plans.", icon: "💰", path: "contact?department=finance" },
    { title: "Insurance", description: "Secure your ride with comprehensive insurance plans.", icon: "📜", path: "contact?department=insurance" },
    { title: "Exchange Your Bike", description: "Upgrade to a new bike by exchanging your old one.", icon: "🔄", path: "exchange" }
  ];

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex flex-col">
      <h2 className="text-5xl font-bold text-red-600 mb-8 text-center mt-20">Our Services</h2>
      <p className="text-xl text-gray-700 mb-10 text-center">
        At Chouhan Motors, we offer a full range of services to ensure the best experience for our customers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-grow">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center text-center h-72 w-72 mx-auto cursor-pointer 
              ${index % 2 === 0 ? "bg-gradient-to-r from-red-700 to-red-500 text-white" : "bg-white text-gray-900 border border-red-600"}
            `}
            onClick={() => navigate(`/${service.path}`)}
          >
            <div className="text-6xl mb-4 animate-pulse">{service.icon}</div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-lg mt-2 px-4 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;