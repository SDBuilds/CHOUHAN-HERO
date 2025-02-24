import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BikeCard from '../UI/BikeCard/BikeCard';
import bikesData from '../Data/bikes.json';
import styles from './Bikes.module.css';

const Bikes = () => {
  const { category, subcategory } = useParams();
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    setBikes(bikesData);
  }, []);

  const filteredBikes = bikes.filter(bike => {
    if (category && subcategory) {
      return bike.category === category && bike.subcategory === subcategory;
    } else if (category) {
      return bike.category === category;
    }
    return true;
  });

  return (
    <div className={styles.bikesContainer}>
      {filteredBikes.map((bike) => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </div>
  );
};

export default Bikes;