import styles from './Home.module.scss';
import Landing from './landing/Landing';
import SimplifyYourUrl from './simplifyUrlExample/SimplifyYourUrl';
import PremiumSub from './premium-sub/PremiumSub';
import Item3 from '../home/item3/Item3';

const Home = () => {
  return (
    <div className={styles.home}>
      <Landing/>
      <SimplifyYourUrl/>
      <PremiumSub/>
      <Item3/>
    </div>
  )
}

export default Home