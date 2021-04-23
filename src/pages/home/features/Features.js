import useScreenSize from '../../../hooks/useScreenSize';
import Carousel from 'react-elastic-carousel';
import FeatureCard from './featureCard/FeatureCard';
import analyctics_img from '../../../assets/img/featureCard/analytics_1.png';
import link_img from '../../../assets/img/featureCard/link_1_1.png';
import qrcode_img from '../../../assets/img/featureCard/QRcode.png';
import styles from './Features.module.scss';

const Features = () => {
const screenSize = useScreenSize().width;
const features = [
  {
    logo: analyctics_img,
    title: 'Feature 1',
    summary: 'Reduce the size of your links by using our shortlink API'
  },
  {
    logo: link_img,
    title: 'Feature 2',
    summary: 'With the prenium subsription, enjoy a QR code for each transformed link'
  },
  {
    logo: qrcode_img,
    title: 'Feature 3',
    summary: 'With the premium subscription, take advantage of a complete dashboard to analyze your results in real time'
  },
]


  return ( 
    <article className={styles.features}>
      <div className={styles.features__title}>
        <h2>Our features</h2>
        <p>Special features created just for you. To unlock advantages, please purchase our premium plan.</p>
      </div>
      {screenSize < 780 &&
        <Carousel>{features.map((feature, i) => <FeatureCard key={i} data={feature} />)}</Carousel>
      }
      {screenSize >= 780 && <div className={styles.features__cards}> {features.map((feature,i)=><FeatureCard key={i} data={feature} />)}</div>}
    </article>
  )
}


export default Features