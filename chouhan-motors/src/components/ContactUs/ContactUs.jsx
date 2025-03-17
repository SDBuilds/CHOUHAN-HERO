import { useState } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import backgroundImage from "../../assets/about_us.jpg";
import Button from "../UI/Button/Button";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [result, setResult] = useState("");
  const [searchParams] = useSearchParams();
  const preSelectedDepartment = searchParams.get("department") || "";
  const [hovered, setHovered] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "0d6741d0-8f50-43ea-bf82-09e284df7765");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-cover bg-center px-6 py-12 relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90"></div>
      
      <h1 className="text-5xl font-extrabold text-red-700 mb-8 text-center relative drop-shadow-lg">
        Contact <span className="text-black">Chouhan Motors</span>
      </h1>

      <motion.div 
        className="w-full max-w-2xl bg-white p-6 shadow-xl rounded-xl border-t-4 border-red-700 text-center relative cursor-pointer mb-12"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setTimeout(() => setHovered(false), 5000)}
        animate={hovered ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.6, repeat: hovered ? Infinity : 0 }}
      >
        <h2 className="text-4xl font-bold text-red-700 mb-3 animate-pulse">📞 CALL NOW</h2>
        <p className="text-xl font-semibold text-black">Sales: +91-9876543210</p>
        <p className="text-xl font-semibold text-black">Service: +91-8765432109</p>
        <p className="text-lg font-medium mt-3 text-gray-700">Sales: <span className="text-red-700">10AM - 7PM (Mon-Sat)</span></p>
        <p className="text-lg font-medium text-gray-700">Service: <span className="text-red-700">9AM - 6PM (Mon-Sun)</span></p>
        <p className="text-sm text-gray-600 mt-2">Please call between working hours for the best customer experience.</p>
      </motion.div>

      <div className="w-full max-w-4xl mb-12 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.576441725636!2d81.30886457589872!3d21.208978481563076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d42174f5653%3A0x99a07ef1a50659ff!2sCHOUHAN%20HERO%20%22Authorised%20Dealer%20Hero%20MotoCorp%20Pvt.%20Ltd.%22!5e0!3m2!1sen!2sin!4v1740462906279!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="rounded-lg shadow-lg border-4 border-red-700"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="bg-white text-black text-center p-6 rounded-lg shadow-xl w-full max-w-2xl mb-12 relative border-l-4 border-red-700">
        <p className="text-lg font-semibold">📍 Durg-Bypass, Beside True Value, Bhilai (C.G)</p>
        <p className="text-lg font-semibold">📞 Phone: +91-8305694280</p>
        <p className="text-lg font-semibold">✉️ Email: info@chouhanmotors.com</p>
      </div>
      
      <div className="w-full max-w-2xl bg-white p-8 shadow-xl rounded-xl border-t-4 border-red-700 relative mt-8">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">Request a Callback</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-800 font-semibold">Name</label>
            <input type="text" name="name" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600" />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold">Contact No</label>
            <input type="tel" name="phone" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600" />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold">Email</label>
            <input type="email" name="email" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600" />
          </div>
          <div>
            <label className="block text-gray-800 font-semibold">Department</label>
            <select 
              name="department" 
              required 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600"
              defaultValue={preSelectedDepartment}
            >
              <option value="sales">Sales</option>
              <option value="service">Service</option>
              <option value="sparepart">Spare part</option>
              <option value="insurance">Insurance</option>
              <option value="finance">Finance</option>
              <option value="exchange">Exchange your bike</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-800 font-semibold">Your Message</label>
            <textarea name="message" rows="4" required className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-600"></textarea>
          </div>
          <div className="text-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
        {result && <p className="text-center text-green-600 mt-4 font-medium">{result}</p>}
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  backgroundImage: PropTypes.string,
};

export default ContactUs;