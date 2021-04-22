import styles from './Header.module.scss';
import logo from '../../assets/logos/Logo-shorty.svg';
import Profile from '../profile/Profile';
import Nav from "../nav/Nav";
import NavLogo from '../nav/NavLogo/NavLogo';
import {Link} from 'react-router-dom';
import CTA from '../ui_components/buttons/CTA';
const Header = ({menuIsActive, toggleMenu, screenWidth}) => {

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" ><h1 className={styles.header__logo}><img src={logo} alt="brand logo"/></h1></Link>
        {screenWidth >= 580 && <Nav/>}
        {screenWidth < 580 && <NavLogo menuIsActive={menuIsActive} toggleMenu={toggleMenu}/>}
        
        <div className={styles.connexion}>
          {screenWidth >= 768 && <Link className={styles.login} to="/login"><CTA value="Login" customStyles={{border: "none", color: "#4D9CA1", background: "#fff"}} /></Link>}
          {screenWidth >= 580 && <Link to="/signup"><CTA value="Sign Up" customStyles={{border: screenWidth >= 780 && "solid 1px #4D9CA1", color: "#4D9CA1", background: "#fff"}} /></Link>}
        </div>
        
      </div>
      
    </header>
  )
}

export default Header