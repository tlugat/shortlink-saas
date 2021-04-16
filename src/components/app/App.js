import {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from '../../errors/ErrorFallBack';
import useScreenSize from '../../hooks/useScreenSize';

import styles from './App.module.scss';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import Home from '../../pages/home/Home';
import Pricing from '../../pages/pricing/Pricing';



function App() {
  const screenWidth = useScreenSize().width;

  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive)
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div style={menuIsActive ? {height: 100 + 'vh'} : {height: 'auto'}} className={styles.App}>
        <Router>
          <Header menuIsActive={menuIsActive} toggleMenu={toggleMenu} screenWidth={screenWidth} />
            {screenWidth < 580 && <Nav screenWidth={screenWidth} menuIsActive={menuIsActive} />}
            <main>
              <Route exact path="/" component={Home} />
              <Route exact path ="/pricing" component={() => <Pricing/>}/>
            </main>
          <Footer/>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
