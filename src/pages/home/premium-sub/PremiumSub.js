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
      <div className={styles.premiumSub__item}>
        <img  src={img} alt="a dashboard screen on a computer"/>
      </div>
     <div className={styles.premiumSub__item + ' ' + styles.teaser}>
       <div className={styles.wrapper}>
        <h3 className={styles.teaser__title}>Enjoy an <span>exclusive</span> dashboard with our <span>premium subscription</span></h3>
        <p className={styles.teaser__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sunt totam dolores corporis, molestias ipsa earum ab placeat esse explicabo iusto iure pariatur officia consequuntur, obcaecati tempora aspernatur amet sapiente.</p>
       </div>
       <Btn value="View More"/>
     </div>
    </div>
  )
}

export default PremiumSub