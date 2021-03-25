import Carousel from 'react-elastic-carousel';
import useScreenSize from '../../../hooks/useScreenSize';
import './Carousel.scss';
import PriceCard from './priceCard/PriceCard';



const PriceCards = () => {
  const screenSize = useScreenSize().width;
  const prices = [
    {
      type: 'Standard',
      price: '$10',
      summary: 'For a standard access, with no features',
      features: [false, false, false, false, false]
    },
    {
      type: 'Premium',
      price: '$39',
      summary: 'For a full access to everything we propose !',
      features: [true, true, true, true, true]
    },
    {
      type: 'Company',
      price: '$100',
      summary: 'For a full access to everything, for you and your company',
      features: [true, true, true, true, true]
    }
  ]

  return ( 
    <div className='priceCards'>
      {screenSize < 780 &&
        <Carousel>
        {prices.map((e,i)=><PriceCard key={i} data={e} />)}
      </Carousel>
      }
      {screenSize >= 780 && prices.map((e,i)=><PriceCard key={i} data={e} />)}
    </div>
    
  )
}

export default PriceCards