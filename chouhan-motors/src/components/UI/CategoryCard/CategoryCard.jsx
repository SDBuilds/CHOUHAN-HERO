import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ category, image, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <Link to={`/category/${category}`}>
          <img src={image} alt={category} className={styles.image} />
        </Link>
      </div>
      <div className={styles.details}>
        <h3>{category}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default CategoryCard;
