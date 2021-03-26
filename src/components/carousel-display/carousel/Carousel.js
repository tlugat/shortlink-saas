import Carousel from 'react-elastic-carousel';
import useScreenSize from '../../../hooks/useScreenSize';
import './Carousel.scss';
import ItemCard from './itemCard/ItemCard';



const CarouselWrapper = ({type}) => {

  const screenSize = useScreenSize().width;

  return ( 
    <div className='carouselWrapper'>
      {screenSize < 780 &&
        <Carousel>
          {type.map((e,i)=><ItemCard key={i} data={e} />)}
        </Carousel>
      }
      {screenSize >= 780 && type.map((e,i)=><ItemCard key={i} data={e} />)}
      
    </div>
    
  )
}

export default CarouselWrapper