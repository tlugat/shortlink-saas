import styles from "./Item3.module.scss"
import CTA from '../../../components/ui_components/buttons/CTA';
import img from '../../../assets/img/item3/phone.png';
const Item3 = () => {
  return ( 
    <article className={styles.container}>
      <div className={styles.item}>
        <h3 className={styles.title}>The best way to get a simple and personalized shortlink</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt natus assumenda asperiores deserunt ipsa sequi quisquam suscipit sint rerum quam sed sapiente numquam, veritatis modi voluptates, hic omnis iste voluptate.</p>
        <CTA customStyles={{color: '#4D9CA1', border: 'solid #4D9CA1 1px'}} light value="View more"/>
      </div>
      <div className={styles.item}>
        <img src={img} alt="hand holding a phone"/>
      </div>
      
    </article>
  )
}

export default Item3