import styles from './Home.module.scss';
import Landing from './landing/Landing';
import SimplifyYourUrl from './simplifyUrlExample/SimplifyYourUrl';

const Home = () => {
  return (
    <section className={styles.home}>
      <Landing/>
      <SimplifyYourUrl/>
    </section>
  )
}

export default Home