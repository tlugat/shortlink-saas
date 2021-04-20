import styles from '../nav/Nav.module.scss'
import Profile from '../profile/Profile';
import cx from 'classnames';
import home_logo from '../../assets/logos/nav/home.svg';
import pricing_logo from '../../assets/logos/nav/pricing.svg';
import dashboard_logo from '../../assets/logos/nav/dashboard.svg';
import doc_logo from '../../assets/logos/nav/doc.svg';
import login_logo from '../../assets/logos/nav/login.svg';

import {NavLink} from 'react-router-dom'

const Nav = ({menuIsActive, screenWidth}) => {
  
  const classes = cx(styles.nav, menuIsActive  && styles.active);
  
  return (
    <nav className={classes}>
      {/* { screenWidth <= 580 && <Profile/>} */}
      <ul className={styles.nav__list}>
        <li><img src={home_logo} fill="#fff" alt=""/> <NavLink to="/" exact activeClassName={styles.itemActive}>Home</NavLink></li>
        <li><img src={pricing_logo} alt=""/> <NavLink to="/pricing" activeClassName={styles.itemActive}>Pricing</NavLink></li>
        <li><img src={doc_logo} alt=""/> <NavLink to="/documentation" activeClassName={styles.itemActive}>Documentation</NavLink></li>
        { screenWidth <= 580 && <li><img src={login_logo} alt=""/><NavLink to="">Login</NavLink></li>}
      </ul> 
    </nav>
    
  )
}

export default Nav