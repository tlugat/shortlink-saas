import styles from './PriceCard.module.scss';

import cross from '../../../assets/logos/cross.svg';
import check from '../../../assets/logos/check.svg';


const PriceCard = ({data}) => {
  const {title, price, monthlyPrice, yearlyPrice, summary, features} = data;

  const feats = ['Dashboard access', 'Live informations', 'QR code', 'UTM Builder', 'API Access'];

  return (
    <div className={styles.priceCard}>
      <h3 className={styles.priceCard__title}>{title}</h3>
        <div className={styles.priceCard__price}>
          <span className={price === "yearly" && styles.yearly}>{price === "yearly" ? yearlyPrice : monthlyPrice}</span>
        </div>
      <p className={styles.priceCard__summary} >{summary}</p>
      <ul className={styles.priceCard__features}>
        { feats.map((feature, i) => {
          return (
            <li key={i}>
              <span>{features[i] ? <img src={check} alt="check logo"/> : <img src={cross} alt="cross logo"/>}</span>
              <p>{feature}</p>
            </li>
          )
          })}
      </ul>
       <button className={styles.priceCard__btn}>Get Started</button>
    </div>
  )
}

export default PriceCard

