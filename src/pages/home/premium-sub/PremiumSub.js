import useScreenSize from '../../../hooks/useScreenSize';
import styles from './Premium-sub.module.scss'
import Btn from '../../../components/ui_components/buttons/CTA';
import computer_small from '../../../assets/img/dashboard-img-small.png'
import computer_large from '../../../assets/img/dashboard-img-large.png'


const PremiumSub = () => {
  const screenSize = useScreenSize().width;
  let computer = computer_small;

  if(screenSize >= 768) {
    computer = computer_large;

  }
  return ( 
    <article className={styles.premiumSub}>
      <div className={styles.premiumSub__background}>
        {/* <img src={ring} alt="gold ring"/>
        <img src={card} alt="browser window vector"/>
        <img src={hand} alt="OK sign with a hand"/> */}
        <div className={styles.premiumSub__wrapper}>
        <h3 className={styles.title}>Enjoy an exclusive dashboard with our premium subscription</h3>
        <Btn light value="View More"/>
      </div>
      </div>
     
     <img className={styles.premiumSub__img} src={computer} alt="dashboard interface on a computer screen"/>
    </article>
  )
}

export default PremiumSub