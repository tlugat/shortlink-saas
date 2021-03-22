import styles from '../nav/Nav.module.scss'

import cx from 'classnames';
import {NavLink} from 'react-router-dom'

const Nav = ({menuIsActive}) => {

  const classes = cx(styles.navBar, menuIsActive && styles.active);

  const navBarStyle = menuIsActive ? "navBar navBar--active" : "navBar";
  
  return (
    <nav className={classes}>
      <ul className={styles.navList}>
        <li><NavLink to="/" exact activeClassName={styles.navList__itemActive}>Home</NavLink></li>
        <li><NavLink to="/pricing" activeClassName={styles.navList__itemActive}>Pricing</NavLink></li>
        <li><NavLink to="/documentation" activeClassName={styles.navList__itemActive}>Documentation</NavLink></li>
      </ul> 
    </nav>
    
  )
}

export default Nav