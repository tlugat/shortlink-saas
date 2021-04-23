import styles from './GetShortlink.module.scss'
import {useState, useEffect} from 'react'
import CTA from '../ui_components/buttons/CTA';
import copy_link from '../../assets/logos/content_copy.svg';
import QRCode from 'qrcode.react';


const GetShortlink = ({userToken}) => {

  const [url, setUrl] = useState('');
  const [newUrl, setNewUrl] = useState('yourUrl.com');
 

  const handleLink = (value) => {
    setUrl(value)
  }

  const handleShortlink = (response) => {
    const shortlink = response.data.shortUrl
    setNewUrl(shortlink)
  }

  // useEffect(() =>  )

  const getShortlink = async () => {
    const axios = require('axios')
    
    axios.post('http://shorty-api-shortlink.herokuapp.com/api/url/shorten', {
        longUrl: url,
        token: userToken
    })
    .then((response) => handleShortlink(response))
    .catch((error) => console.log(error));
  }


  return (
    <article className={styles.getShortlink}>
      <div>
        <h2>Get your shortlink simply and quickly!</h2>
        <div className={styles.getShortlink__field}>
          <input aria-label="link" id="link" name="link" onChange={(e) => handleLink(e.target.value)} placeholder="yourUrl/super-compli/cated/and/long.com" type="text"/>
          <CTA customStyles={{height: '49px'}} onClickMethod={getShortlink}  value="Shorten"/>
        </div>
      
        <div className={styles.getShortlink__text}>
          <p>Your brand new URL simplified :</p>
          <br/>
          <div className={styles.result}>
            <span onClick={() => navigator.clipboard.writeText(newUrl)} ><img src={copy_link} alt="copy logo" /></span>
          </div>
        </div>
      </div>
        <div className={styles.getShortlink__qrCode} >
          <QRCode value={newUrl} />
        </div>
        
    </article>
  )
}

export default GetShortlink