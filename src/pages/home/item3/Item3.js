import styles from "./Item3.module.scss"
import CTA from '../../../components/ui_components/buttons/CTA';
import img from '../../../assets/img/item3/phone.png';
const Item3 = () => {
  return ( 
    <article className={styles.container}>
      <div className={styles.item}>
        <h3 className={styles.title}>The best way to get a simple and personalized shortlink</h3>
        <p>For more informations on shortlink you can contact our service or the documentation wich will explain the use and various advantages of the API</p>
        <CTA customStyles={{color: '#4D9CA1', border: 'solid #4D9CA1 1px'}} light value="View more"/>
      </div>
      <div className={styles.item}>
        <img src={img} alt="hand holding a phone"/>
      </div>
      
    </article>
  )
}

export default Item3