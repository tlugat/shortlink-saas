import styles from './Pricing.module.scss'
import Carousel from './carousel/Carousel';


const Pricing = () => {
  return ( 
    <div className={styles.pricing}>
      <div className={styles.pricing__title}>
        <h2>Prices to suit all sizes of business</h2>
        <p>Choose plan that works best for you, feel free to contact us</p>
      </div>
      <Carousel />
    </div>
    
  )
}

export default Pricing