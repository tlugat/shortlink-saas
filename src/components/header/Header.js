import styles from './Header.module.scss';

import NavLogo from '../nav/NavLogo/NavLogo';

const Header = ({menuIsActive, toggleMenu}) => {
  return (
    <div className={styles.header}>
      <h1>ShortLink</h1>
      <NavLogo menuIsActive={menuIsActive} toggleMenu={toggleMenu}/>
    </div>
  )
}

export default Header