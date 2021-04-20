import styles from "./FeatureCard.module.scss"
import {Link} from 'react-router-dom'
import arrow from '../../../../assets/logos/featureCard/righ-arrow.svg';
const FeatureCard = ({data}) => {

  const {logo, title, summary} = data

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={logo} alt=""/>
      <h4 className={styles.card__title}>{title}</h4>
      <p className={styles.card__summary}>{summary}</p>
      <Link className={styles.card__link} to="/pricing">Learn more <span><img src={arrow} alt=""/></span></Link>
    </div>
  );
};

export default FeatureCard;