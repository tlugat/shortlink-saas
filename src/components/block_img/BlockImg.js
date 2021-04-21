import styles from './BlockImg.module.scss'

import useScreenSize from '../../hooks/useScreenSize';

const BlockImg = ({imgSmall, imgLarge}) => {

  const screenWidth = useScreenSize().width;
  let img = imgSmall;
  if (screenWidth >= 1024) {
    img = imgLarge;
  }
  return( 
    <div className={styles.block}>
      <h3>Register to access your data</h3>
      <img src={img} alt=""/>
    </div>
  )
}

export default BlockImg