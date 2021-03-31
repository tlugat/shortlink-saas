import styles from './Pricing.module.scss'
import Carousel from '../../components/ui_components/carousel-display/CarouselDisplay';

const Pricing = () => {
  return ( 
    <section className={styles.carrousel}>
      <Carousel type="prices"/>
    </section>
    
  )
}

export default Pricing