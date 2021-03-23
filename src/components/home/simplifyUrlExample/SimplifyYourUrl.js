import {useState} from 'react'

import styles from './SimplifyYourUrl.module.scss';

import CTA from '../../ui components/buttons/CTA';

const SimplifyUrl = () => {

  const [url, setUrl] = useState('MySimpleUrl.com');

  return (
    <article className={styles.simplifyUrl}>
      <div className={styles.container}>
        <div className={styles.simplifyUrl__field}>
          <input onChange={(e) => setUrl(e.target.value)} placeholder="Please inquire your email here" type="text"/>
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