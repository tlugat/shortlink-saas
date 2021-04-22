import styles from './ExampleCard.module.scss'

const ExampleCard = () => {
  return ( 
    <div className={styles.card}>
      <div className={styles.card__header}></div>
      <div className={styles.card__body}></div>
    </div>
  )
}

export default ExampleCard