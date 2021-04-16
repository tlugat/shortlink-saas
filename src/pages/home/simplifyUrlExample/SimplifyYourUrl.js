import {useState} from 'react'

import styles from './SimplifyYourUrl.module.scss';

import CTA from '../../../components/ui_components/buttons/CTA';

const SimplifyUrl = () => {

  const [url, setUrl] = useState('');
  const [newUrl, setNewUrl] = useState('yourUrl.com');
  const [error, setError] = useState(false);

  const checkUrl = () => {
    const urlRegex = require('url-regex');
    urlRegex().test(url) ? handleShorten() : setError(true);
  } 
  
  const handleShorten = () => {
    error && setError(false);
    let test = url;
    
    if(url.includes('https://') && url.indexOf('https://') === 0) {
      test = url.replace("https://", "");
    } else if(url.includes('http://') && url.indexOf('http://') === 0) {
      test = url.replace("http://", "");
    }
    let sld = test.slice(test.lastIndexOf("."), test.length);
    setNewUrl(test.slice(0, test.indexOf('/')) + sld);
    console.log(newUrl)
  
  }

  return (
    <article className={styles.simplifyUrl}>
      <div className={styles.container}>
        <div className={styles.simplifyUrl__field}>
          <input onChange={(e) => setUrl(e.target.value)} placeholder="yourUrl/super-compli/cated/and/long.com" type="text"/>
          <CTA onClickMethod={checkUrl} value="Shorten"/>
        </div>
      
        <div className={styles.simplifyUrl__text}>
          <p>Your brand new URL simplified :</p>
          <br/>
          { error ? <p style={{color: 'red'}}>The URL entered is not valid</p> : <p>{newUrl}</p> }
        </div>
      </div>
    </article>
  )
}

export default SimplifyUrl