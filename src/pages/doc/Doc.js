import styles from './Doc.module.scss'
import useScreenSize from '../../hooks/useScreenSize'
import ExampleCard from './exampleCard/ExampleCard'

const Doc = () => {

  const screenWidth = useScreenSize().width;

  return ( 
    <section className={styles.doc}>
     {screenWidth >= 768 && ( 
     <div className={styles.doc__sidebar}>
        <nav>
          <li><a href="#intro">Introduction</a></li>
          <li><a href="#howItWorks">How it works ?</a></li>
        </nav>
      </div>
      )}
      <div className={styles.doc__articles}>
        <article className={styles.article}>
          <div className={styles.article__text}>
            <h2 className={styles.title}>Introduction</h2>
            <p>
              Shorty is the most widely trusted link management platform in the world. By using the Shorty API, you will exercise the full power of your links through automated link customization, and click analytics.
              <br/>
              <br/>
              While shortening links is Shorty’s most basic functionality, our customers can get live informations about their data, and can get access to a QR code link.
              <br/>
              <br/>
              <br/>
              <span>How it works :</span>
              <br/>
              <br/>
              <ul>
                <li>• Generate an access token.</li>
                <br/>
                <li>• You'll use the POST method to the /v4/shorten endpoint. Append your access token as a header in your request.</li>
              </ul>
            </p>
            <br/>
            <br/>
            <br/>
            <p>Here's an example: Authorization: Bearer {"{token}"}:</p>
            <br/>
          </div>
          <div className={styles.article__example}><ExampleCard/></div>    
        </article>
      </div>
      
    </section>
  )
}

export default Doc