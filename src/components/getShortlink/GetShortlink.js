import styles from './GetShortlink.module.scss'
import {useState} from 'react'
import CTA from '../ui_components/buttons/CTA';
import copy_link from '../../assets/logos/content_copy.svg';
import QRCode from 'qrcode.react';


const GetShortlink = ({userToken}) => {

  const [url, setUrl] = useState('');
  const [newUrl, setNewUrl] = useState('yourUrl.com');
  const [error, setError] = useState(false);

  const handleLink = (value) => {
    setUrl(value)
  }

  const handleShortlink = (response) => {
    const shortlink = response.data.shortUrl
    setNewUrl(shortlink)
  }

  const getShortlink = () => {
    const axios = require('axios')
    
    axios.post('http://shorty-api-shortlink.herokuapp.com/api/url/shorten', {
        longUrl: url,
        token: userToken
    })
    .then((response) => handleShortlink(response))
    .catch((error) => console.log(error));
  }
  


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
          <CTA onClickMethod={getShortlink}  value="Shorten"/>
        </div>
      
        <div className={styles.getShortlink__text}>
          <p>Your brand new URL simplified :</p>
          <br/>
          <div className={styles.result}>
            { error ? <p style={{color: 'red'}}>The URL entered is not valid</p> : <p>{newUrl}</p> }
            {!error && <span onClick={() => navigator.clipboard.writeText(newUrl)} ><img src={copy_link} alt="copy logo" /></span>}
          </div>
        </div>
        <QRCode value={newUrl} />
    </article>
  )
}

export default GetShortlink