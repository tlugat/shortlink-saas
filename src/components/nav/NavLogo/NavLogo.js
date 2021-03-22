import cx from 'classnames';

import styles from './NavLogo.module.scss';

const NavLogo = ({toggleMenu, menuIsActive}) => {

  const classes = cx(styles.burger, menuIsActive && styles.active);

  return (
    <div onClick={toggleMenu} className={classes}>
      <span></span>
    </div>
  )
}

export default NavLogo