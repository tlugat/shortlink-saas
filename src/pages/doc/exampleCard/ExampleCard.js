import styles from './ExampleCard.module.scss'

const ExampleCard = ({header, body}) => {
  
  return ( 
    <div className={styles.card}>
      <div className={styles.card__header}>{header}</div>
      <div className={styles.card__body}>{
        <>
          <span>{`{`}</span>  
          <br/>  
          {body}
          <br/> 
          <span>{`{`}</span>
        </>
        }
      
      </div>
    </div>
  )
}

export default ExampleCard