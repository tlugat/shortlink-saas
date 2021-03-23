import styles from '../nav/Nav.module.scss'

import cx from 'classnames';

import {NavLink} from 'react-router-dom'

const Nav = ({menuIsActive}) => {
  
  const classes = cx(styles.nav, menuIsActive  && styles.active);
  
  return (
    <nav className={classes}>
      <span className={styles.nav__profile}></span>
      <ul className={styles.nav__list}>
        <li><NavLink to="/" exact activeClassName={styles.itemActive}>Home</NavLink></li>
        <li><NavLink to="/pricing" activeClassName={styles.itemActive}>Pricing</NavLink></li>
        <li><NavLink to="/documentation" activeClassName={styles.itemActive}>Documentation</NavLink></li>
      </ul> 
    </nav>
    
  )
}

export default Nav