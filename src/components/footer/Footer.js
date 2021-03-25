import styles from './Footer.module.scss';

import fb_icon from "../../assets/logos/fb-icon.svg";
import twitter_icon from '../../assets/logos/twitter-icon.svg';
import instagram_icon from '../../assets/logos/instagram-icon.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <section className={styles.footer__brands}>
          <h6 className={styles.footer__title}>ShortLink</h6>
          <ul>
            <li><img src={fb_icon} alt="facebook icon"/></li>
            <li><img src={twitter_icon} alt="twitter icon"/></li>
            <li><img src={instagram_icon} alt="instagram icon"/></li>
          </ul>
        </section>
        <section className={styles.footer__linkManagement}>
          <h6 className={styles.footer__title}>Link Management</h6>
          <ul>
            <li>API</li>
            <li>Check url</li>
            <li>Unsubscribe newsletter</li>
          </ul>
        </section>
        <section className={styles.footer__urlShortener}>
        <h6 className={styles.footer__title}>URL Shortener</h6>
        <ul>
          <li>URL Shortener</li>
          <li>Available features</li>
        </ul>
        </section>
        <section className={styles.footer__about}>
          <h6 className={styles.footer__title}>About</h6>
          <ul>
            <li>Terms of service</li>
            <li>Privacy</li>
            <li>Contact</li>
          </ul>
        </section>
      </div>
      <p>2021 ShortLInk | Made by group 5</p>
    </footer>
  )
}

export default Footer