import {useState} from 'react'

import styles from './SimplifyYourUrl.module.scss';

import CTA from '../../ui components/buttons/CTA';

const SimplifyUrl = () => {

  const [url, setUrl] = useState('mysimpleurl.com');

  return (
    <article className={styles.simplifyUrl}>
      <div className={styles.container}>
        <div className={styles.simplifyUrl__field}>
          <input onChange={(e) => setUrl(e.target.value)} placeholder="my-super/compl/icated-a_5nd/long-4dhdfh-5f2/url.com" type="text"/>
          <CTA value="Shorten"/>
        </div>
      
        <div className={styles.simplifyUrl__text}>
          <p>Your brand new URL simplified :</p>
          <br/>
          <p>{url}</p>
        </div>
      </div>
    </article>
  )
}

export default SimplifyUrl