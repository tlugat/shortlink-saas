import {useState} from 'react';

import styles from './CarouselDisplay.module.scss'
import Carousel from './carousel/Carousel';
import ToggleBtn from '../../ui_components/buttons/toggle/ToggleBtn';

const CarouselDisplay = ({type}) => {
  
  const [pricesRate, setPricesRate] = useState("monthly");

  const data = {
      title: "",
      text: "",
      type: "",
    };

  const prices = [
    {
      title: 'Standard',
      price: pricesRate,
      monthlyPrice: '$10',
      yearlyPrice: '$120',
      summary: 'For a standard access, with no features',
      features: [false, false, false, false, false]
    },
    {
      title: 'Premium',
      price: pricesRate,
      monthlyPrice: '$39',
      yearlyPrice: '$468',
      summary: 'For a full access to everything we propose !',
      features: [true, true, true, true, true]
    },
    {
      title: 'Company',
      price: pricesRate,
      monthlyPrice: '$100',
      yearlyPrice: '$1200',
      summary: 'For a full access to everything, for you and your company',
      features: [true, true, true, true, true]
    }
  ] 

  const features = [
    {
      title: 'Feature 1',
      summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi porro impedit quas, ut eos sunt! Provident quae, illo ipsam possimus hic blanditiis distinctio vitae natus libero, aut dicta soluta consectetur?"
    },
    {
      title: 'Feature 2',
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consectetur laborum odit iure ipsam nulla, earum beatae cupiditate, error quos placeat eius blanditiis ipsum. Tenetur dolorem incidunt architecto adipisci eos!"
    },
    {
      title: 'Feature 3',
      summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat tenetur aperiam rerum sapiente iusto in quia atque repudiandae reiciendis, accusamus tempore, facilis repellendus nisi ad officia animi inventore possimus?"
    },
    {
      title: 'Feature 4',
      summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam consequatur aut recusandae vel officiis doloribus veritatis placeat dolore officia fugiat voluptate deleniti maiores, laboriosam accusantium quas! Molestias placeat iure libero."
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
 
  const handleToggleRate = (e) => {
    const test = e.target.getAttribute("value");
    if(e.target.checked) setPricesRate(test);
  }
    
  

  return ( 
    <div className={styles.carouselContainer}>
      <div className={styles.carouselContainer__title}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
      </div>
      <div className={styles.carouselContainer__toggleBtn}>
        {type === "prices" && <ToggleBtn handleToggleRate={handleToggleRate} values={["Monthly", "Yearly"]} />}
      </div>
      
      <Carousel type={type} data={data.type} />
    </div>
    
  )
}

export default CarouselDisplay