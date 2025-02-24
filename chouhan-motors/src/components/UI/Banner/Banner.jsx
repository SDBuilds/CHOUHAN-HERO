import styles from './Banner.module.css';
import bannerImage from '../../../assets/Showroom.jpeg'; 

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
    </div>
  );
};

export default Banner;