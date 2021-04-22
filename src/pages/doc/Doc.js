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
              </p>
              <span>How it works :</span>
              <br/>
              <br/>
              
              <ul>
                <li>• Generate an access token.</li>
                <br/>
                <li>• You'll use the POST method to the /v4/shorten endpoint. Append your access token as a header in your request.</li>
              </ul>
            
            <br/>
            <br/>
            <br/>
            <p>Here's an example: Authorization: Bearer {"{token}"}:</p>
            <br/>
          </div>
          <div className={styles.article__example}>
            <ExampleCard 
              header={<span>POST /v4/shorten <br/>http://localhost:5000/api/url/shorten</span>}
              body={
                <p>
                  <br/>
                  <span style={{color: '#FFBA31'}} >"_id":</span> <span style={{color:'#FFFFC7'}}>"608187c48ff045055c6bcded"</span>,
                  <br/>
                  <span style={{color: '#FFBA31'}} >"longUrl":</span> <span style={{color:'#FFFFC7'}}>"https://manganelo.com/manga/lr922610"</span>,
                  <br/>
                  <span style={{color: '#FFBA31'}} >"shortUrl":</span> <span style={{color:'#FFFFC7'}}>"http://localhost:5000/5Mo-pMY41"</span>,
                  <br/>
                  <span style={{color: '#FFBA31'}} >"urlCode":</span> <span style={{color:'#FFFFC7'}}>"5Mo-pMY41"</span>,
                  <br/>
                  <span style={{color: '#FFBA31'}} >"userId":</span> <span style={{color:'#FFFFC7'}}>""</span>,
                  <br/>
                  <span style={{color: '#FFBA31'}} >"date":</span> <span style={{color:'#FFFFC7'}}>"Thu Apr 22 2021 16:27:16 GMT+0200 (heure d’été d’Europe centrale)"</span>,
                  <br/>
                  <span style={{color: '#FFBA31'}} >"__v":</span> <span style={{color:'#FFFFC7'}}>0</span>
                  <br/>
                </p>
              } 
            />
              </div>    
        </article>
      </div>
      
    </section>
  )
}

export default Doc