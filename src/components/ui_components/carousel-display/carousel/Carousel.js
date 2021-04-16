import Carousel from 'react-elastic-carousel';
import useScreenSize from '../../../../hooks/useScreenSize';
import './Carousel.scss';
import ItemCard from './itemCard/ItemCard';



const CarouselWrapper = ({data, type}) => {

  const screenSize = useScreenSize().width;

  return ( 
    <div className='carouselWrapper'>
      {screenSize < 780 &&
        <Carousel>
          {data.map((e,i)=><ItemCard type={type} key={i} data={e} />)}
        </Carousel>
      }
      {screenSize >= 780 && data.map((e,i)=><ItemCard type={type} key={i} data={e} />)}
      
    </div>
    
  )
}

export default CarouselWrapper