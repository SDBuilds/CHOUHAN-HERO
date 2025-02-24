import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/UI/Banner/Banner';
import Bikes from './components/Bikes/Bikes';
import Footer from './components/Footer/Footer';
import CategoryCard from './components/UI/CategoryCard/CategoryCard';
import './index.css';

import motorcyclesImage from './assets/Motorcycles.png';
import premiumImage from './assets/Premium.png';
import scootersImage from './assets/Scooter.png';
import upcomingImage from './assets/Vida.png';

const categories = [
  { name: 'Motorcycles', image: motorcyclesImage },
  { name: 'Premium', image: premiumImage },
  { name: 'Scooters', image: scootersImage },
  { name: 'Upcoming Launches', image: upcomingImage }
];

const App = () => {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <div className="categoryContainer">
                  {categories.map(category => (
                    <CategoryCard key={category.name} category={category.name} image={category.image} />
                  ))}
                </div>
              </>
            } />
            <Route path="/category/:category" element={<Bikes />} />
            <Route path="/category/:category/:subcategory" element={<Bikes />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/contact" element={<div>Contact Us Page</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;