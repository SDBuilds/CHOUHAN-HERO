import PropTypes from 'prop-types';
import styles from './BikeCard.module.css';
import Button from '../Button/Button';

const BikeCard = ({ bike }) => {
  return (
    <div className={styles.card}>
      <img src={bike.image} alt={bike.name} className={styles.image} />
      <div className={styles.details}>
        <h3>{bike.name}</h3>
        <p>{bike.description}</p>
        <p>Price: {bike.price}</p>
        <Button onClick={() => alert(`You clicked on ${bike.name}`)}>View Details</Button>
      </div>
    </div>
  );
};

BikeCard.propTypes = {
  bike: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default BikeCard;