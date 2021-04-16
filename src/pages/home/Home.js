import styles from './Home.module.scss';
import Landing from './landing/Landing';
import SimplifyYourUrl from './simplifyUrlExample/SimplifyYourUrl';
import PremiumSub from './premium-sub/PremiumSub';
import Carousel from '../../components/ui_components/carousel-display/CarouselDisplay';


const Home = () => {
  return (
    <div className={styles.home}>
      <Landing/>
      <SimplifyYourUrl/>
      <Carousel type="features" />
      <PremiumSub/>
    </div>
  )
}

export default Home