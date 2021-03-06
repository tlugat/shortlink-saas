import BlockImg from '../block_img/BlockImg'
import Form from '../form/Form';
import signup_img_small from '../../assets/img/connexion/signup/signup-img-small.png';
import signup_img_large from '../../assets/img/connexion/signup/signu-img-large.png';
import login_img_small from '../../assets/img/connexion/login/login-img-small.png';
import login_img_large from '../../assets/img/connexion/login/login-img-large.png';

import styles from './Connexion.module.scss';

const Connexion = ({location, setToken}) => {
  
  let imgSmall = login_img_small
  let imgLarge = login_img_large

  if(location === "/signup") {
    imgSmall = signup_img_small;
    imgLarge = signup_img_large;
  } 

  return ( 
    <div className={styles.connexion} >
      <div className={styles.container}>
        <div className={styles.connexion__title}>
          <h2>{location === "/signup" ? "Sign Up." : "Login."}</h2>
          <p>{location === "/signup" ? "Welcome new user !" : "We are happy to see your here !"}</p>
        </div>
        <Form location={location} setToken={setToken} />
      </div>
      
      <BlockImg location={location} imgSmall={imgSmall} imgLarge={imgLarge}/>
    </div>
    
  )
}


export default Connexion