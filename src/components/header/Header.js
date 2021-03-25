import styles from './Header.module.scss';

import Profile from '../profile/Profile';
import Nav from "../nav/Nav";
import NavLogo from '../nav/NavLogo/NavLogo';

const Header = ({menuIsActive, toggleMenu, screenWidth}) => {

  return (
    <header className={styles.header}>
      <h1 className={styles.header__logo}>ShortLink</h1>
      {screenWidth >= 580 && <Nav/>}
      {screenWidth < 580 && <NavLogo menuIsActive={menuIsActive} toggleMenu={toggleMenu}/>}
      {screenWidth >= 580 && <Profile screenWidth={screenWidth}/>}
    </header>
  )
}

export default Header