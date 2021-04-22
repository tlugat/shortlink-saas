import styles from './GetShortlink.module.scss'
import {useState} from 'react'
import CTA from '../ui_components/buttons/CTA';
import copy_link from '../../assets/logos/content_copy.svg';

const GetShortlink = () => {

  const [url, setUrl] = useState('');
  const [newUrl, setNewUrl] = useState('yourUrl.com');
  const [error, setError] = useState(false);

  const handleLink = (value) => {
    setUrl(value)
    console.log(url)
  } 

  // const GetSHortLink = () => {
  //   fetch()
  // }
  
  // const handleShorten = () => {
  //   error && setError(false);
  //   let test = url;
    
  //   if(url.includes('https://') && url.indexOf('https://') === 0) {
  //     test = url.replace("https://", "");
  //   } else if(url.includes('http://') && url.indexOf('http://') === 0) {
  //     test = url.replace("http://", "");
  //   }
  //   let sld = test.slice(test.lastIndexOf("."), test.length);
  //   setNewUrl(test.slice(0, test.indexOf('/')) + sld);
  //   console.log(newUrl)
  
  // }


  return (
    <article className={styles.getShortlink}>
      <h2>Get your shortlink simply and quickly!</h2>
        <div className={styles.getShortlink__field}>
          <input aria-label="link" id="link" name="link" onChange={(e) => handleLink(e.target.value)} placeholder="yourUrl/super-compli/cated/and/long.com" type="text"/>
          <CTA  value="Shorten"/>
        </div>
      
        <div className={styles.getShortlink__text}>
          <p>Your brand new URL simplified :</p>
          <br/>
          <div className={styles.result}>
            { error ? <p style={{color: 'red'}}>The URL entered is not valid</p> : <p>{newUrl}</p> }
            {!error && <span onClick={() => navigator.clipboard.writeText(newUrl)} ><img src={copy_link} alt="copy logo" /></span>}
          </div>
        </div>
    </article>
  )
}

export default GetShortlink