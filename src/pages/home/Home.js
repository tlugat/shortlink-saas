import styles from './Home.module.scss';
import Landing from './landing/Landing';
import GetShortlink from '../../components/getShortlink/GetShortlink';
import PremiumSub from './premium-sub/PremiumSub';
import Item3 from '../home/item3/Item3';
import Features from './features/Features';
const Home = () => {
  return (
    <div className={styles.home}>
      <Landing/>
      <GetShortlink/>
      <Features/>
      <PremiumSub/>
      <Item3/>
    </div>
  )
}

export default Home