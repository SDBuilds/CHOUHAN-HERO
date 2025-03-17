import { useState } from "react";

const ExchangeBike = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);

  const [formData, setFormData] = useState({
    name: "",
    bikeBrand: "",
    model: "",
    year: "",
    kmsDriven: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Exchange Request Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-6">Exchange Your Bike</h2>
        <p className="text-gray-600 text-center mb-6">Upgrade to a new ride by exchanging your old bike with us.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Bike Brand</label>
            <input type="text" name="bikeBrand" value={formData.bikeBrand} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Model</label>
            <input type="text" name="model" value={formData.model} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Year of Manufacture</label>
            <select name="year" value={formData.year} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none" required>
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Kilometers Driven</label>
            <input type="number" name="kmsDriven" value={formData.kmsDriven} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 outline-none" required />
          </div>
          <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ExchangeBike;