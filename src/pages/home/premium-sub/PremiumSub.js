import useScreenSize from '../../../hooks/useScreenSize';
import styles from './Premium-sub.module.scss'
import Btn from '../../../components/ui_components/buttons/CTA';
import small from '../../../assets/img/dashboard-img-small.png'
import large from '../../../assets/img/dashboard-img-large.png'

const PremiumSub = () => {
  const screenSize = useScreenSize().width;
  let img = small;
  if(screenSize >= 768) {
    img = large
  }
  return ( 
    <div className={styles.premiumSub}>
     <img className={styles.premiumSub__item} src={img} alt="a dashboard screen on a computer"/> 
     <div className={styles.premiumSub__item}>
       <p>Enjoy an <span>exclusive</span> dashboard with our <span>premium subscription</span></p>
       <Btn value="View More"/>
     </div>
    </div>
    
  )
}

export default PremiumSub