import styles from './Home.module.scss';
import Landing from './landing/Landing';
import SimplifyYourUrl from './simplifyUrlExample/SimplifyYourUrl';
import PremiumSub from './premium-sub/PremiumSub';
import Carousel from '../carousel-display/CarouselDisplay';


const Home = () => {
  return (
    <section className={styles.home}>
      <Landing/>
      <SimplifyYourUrl/>
      <Carousel type="features" />
      {/* <PremiumSub/> */}
    </section>
  )
}

export default Home