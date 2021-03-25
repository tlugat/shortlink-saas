import styles from '../nav/Nav.module.scss'
import Profile from '../profile/Profile';
import cx from 'classnames';

import {NavLink} from 'react-router-dom'

const Nav = ({menuIsActive, screenWidth}) => {
  
  const classes = cx(styles.nav, menuIsActive  && styles.active);
  
  return (
    <nav className={classes}>
      { screenWidth <= 580 && <Profile/>}
      <ul className={styles.nav__list}>
        <li><NavLink to="/" exact activeClassName={styles.itemActive}>Home</NavLink></li>
        <li><NavLink to="/pricing" activeClassName={styles.itemActive}>Pricing</NavLink></li>
        <li><NavLink to="/documentation" activeClassName={styles.itemActive}>Documentation</NavLink></li>
      </ul> 
    </nav>
    
  )
}

export default Nav