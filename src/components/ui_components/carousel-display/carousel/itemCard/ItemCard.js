import styles from './ItemCard.module.scss';

import cross from '../../../../../assets/logos/cross.svg';
import check from '../../../../../assets/logos/check.svg';
import shield from '../../../../../assets/logos/shield-logo.svg';
import cx from 'classnames';

const ItemCard = ({data, type}) => {
  const {title, price, monthlyPrice, yearlyPrice, summary, features} = data;

  const feats = ['Dashboard access', 'Live informations', 'QR code', 'UTM Builder', 'API Access'];

  const classes = cx(styles.itemCard, type === "features" && styles.green);

  
  return (
    <div className={classes}>
      <h3 className={styles.itemCard__title}>{title}</h3>
      {type === "prices" && 
        <div className={styles.itemCard__price}>
          <span className={price === "yearly" && styles.yearly}>{price === "yearly" ? yearlyPrice : monthlyPrice}</span>
        </div>
      } 
      <p className={styles.itemCard__summary} >{summary}</p>
      { type === "prices" &&
        <ul className={styles.itemCard__features}>
          { feats.map((feature, i) => {
            return (
              <li key={i}>
                <span>{features[i] ? <img src={check} alt="check logo"/> : <img src={cross} alt="cross logo"/>}</span>
                <p>{feature}</p>
              </li>
            )
            })}
        </ul>
      }
      {type === "features" && <img src={shield} alt="logo of a shield"/>}
      {type === "prices" && <button className={styles.itemCard__btn}>Get Started</button>}
    </div>
  )
}

export default ItemCard

