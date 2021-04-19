import {useState} from 'react';
import './Pricing.scss';
import Carousel from 'react-elastic-carousel';
import PriceCard from './priceCard/PriceCard';
import img_small from '../../assets/img/pricing/pricing-img-small.png';
import img_large from '../../assets/img/pricing/pricing-img-large.png';
import useScreenSize from '../../hooks/useScreenSize';
import ToggleBtn from '../../components/ui_components/buttons/toggle/ToggleBtn';

const Pricing = () => {
  const screenSize = useScreenSize().width;
  const [pricesRate, setPricesRate] = useState("monthly");
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
  let img = img_small;
  if(screenSize >= 780) {
    img = img_large
  }
  
  const handleToggleRate = (e) => {
    const test = e.target.getAttribute("value");
    if(e.target.checked) setPricesRate(test);
  }

  return ( 
    <section className="pricing">
      <div className="pricing__title">
        <h2>Prices to suit <br/> all sizes of business</h2>
        <p>Choose plan that works best for you, feel free to contact us</p>
      </div>
      <ToggleBtn handleToggleRate={handleToggleRate} values={["Monthly", "Yearly"]} />
      {screenSize < 780 &&
        <Carousel>
          {prices.map((e,i)=><PriceCard key={i} data={e} />)}
        </Carousel>
      }
      {screenSize >= 780 && <div className="pricing__cards"> {prices.map((e,i)=><PriceCard key={i} data={e} />)}</div>}
      
      <img className="pricing__img" src={img} alt=""/>
    </section>
    
  )
}

export default Pricing