import styles from './CarouselDisplay.module.scss'
import Carousel from './carousel/Carousel';

const CarouselDisplay = ({type}) => {
 const data = {
    title: "",
    text: "",
    type: ""
  };

  const prices = [
    {
      title: 'Standard',
      price: '$10',
      summary: 'For a standard access, with no features',
      features: [false, false, false, false, false]
    },
    {
      title: 'Premium',
      price: '$39',
      summary: 'For a full access to everything we propose !',
      features: [true, true, true, true, true]
    },
    {
      title: 'Company',
      price: '$100',
      summary: 'For a full access to everything, for you and your company',
      features: [true, true, true, true, true]
    }
  ]

  const features = [
    {
      title: 'Feature 1',
      summary: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsmum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
      title: 'Feature 2',
      summary: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsmum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
      title: 'Feature 3',
      summary: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsmum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    },
    {
      title: 'Feature 4',
      summary: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsmum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
    }
  ]

  if(type === 'features') {
    data.title = 'Our features';
    data.text = 'Special features created just for you. To unlock all advantages, please purchase our premium plan.'
    data.type = features;
    } else if(type === 'prices') {

      data.title = "Prices to suit all sizes of business";
      data.text = "Choose plan that works best for you, feel free to contact us";
      data.type = prices
    }
  


  return ( 
    <div className={styles.pricing}>
      <div className={styles.pricing__title}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
      </div>
      <Carousel type={data.type} />
    </div>
    
  )
}

export default CarouselDisplay