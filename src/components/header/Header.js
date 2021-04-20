import styles from './Header.module.scss';
import logo from '../../assets/logos/Logo-shorty.svg';
import Profile from '../profile/Profile';
import Nav from "../nav/Nav";
import NavLogo from '../nav/NavLogo/NavLogo';

const Header = ({menuIsActive, toggleMenu, screenWidth}) => {

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.header__logo}><img src={logo} alt="brand logo"/></h1>
        {screenWidth >= 580 && <Nav/>}
        {screenWidth < 580 && <NavLogo menuIsActive={menuIsActive} toggleMenu={toggleMenu}/>}
        {/* {screenWidth >= 580 && <Profile screenWidth={screenWidth}/>} */}
      </div>
      
    </header>
  )
}

export default Header