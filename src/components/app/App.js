import {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import styles from './App.module.scss';

import Header from '../header/Header';
import Nav from '../nav/Nav';

function App() {

  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive)
  }


  return (
    <div style={menuIsActive ? {height: 100 + 'vh'} : {height: 'auto'}} className={styles.App}>
      <Router>
        <Header menuIsActive={menuIsActive} toggleMenu={toggleMenu}/>
        <Nav menuIsActive={menuIsActive}/>
      </Router>
      
      
    </div>
  );
}

export default App;
