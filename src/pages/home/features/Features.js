import useScreenSize from '../../../hooks/useScreenSize';
import Carousel from 'react-elastic-carousel';
import FeatureCard from './featureCard/FeatureCard';
import shield from '../../../assets/logos/featureCard/shield.svg';
import book from '../../../assets/logos/featureCard/book.svg';
import gear from '../../../assets/logos/featureCard/gear.svg';
import styles from './Features.module.scss';

const Features = () => {
const screenSize = useScreenSize().width;
const features = [
  {
    logo: shield,
    title: 'Feature 1',
    summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi vero porro modi exercitationem, officia nam molestias quaerat aperiam at quidem earum adipisci deserunt, enim ipsam ipsum cupiditate quae, alias iure!'
  },
  {
    logo: gear,
    title: 'Feature 2',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ex quis beatae veritatis autem quasi laborum consequatur quae laboriosam nemo doloremque, repellat molestias mollitia. Nesciunt nostrum ipsam dolorem similique distinctio?'
  },
  {
    logo: book,
    title: 'Feature 3',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, iste deserunt temporibus eos officiis veritatis dicta repellendus, veniam quos voluptatem mollitia. Blanditiis iste rerum suscipit ipsa maxime temporibus at hic!'
  },
  {
    logo: shield,
    title: 'Feature 4',
    summary: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, ipsum. Odit obcaecati ea beatae hic voluptatem dolorum iste exercitationem! Dolor ad ab adipisci atque, placeat nam excepturi non. Nisi, similique.'
  }
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