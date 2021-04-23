import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from '../../errors/ErrorFallBack';
import useScreenSize from '../../hooks/useScreenSize';

import styles from './App.module.scss';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import Home from '../../pages/home/Home';
import Pricing from '../../pages/pricing/Pricing';
import Connexion from '../connexion/Connexion';
import Dashboard from '../../pages/dashboard/Dashboard'
import Doc from '../../pages/doc/Doc'


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
  window.location.reload();
}

function getToken() {
  const token = sessionStorage.getItem('token');
  return token;
}
function getUserName() {
  const userName = sessionStorage.getItem('userName');
  return userName;
}

function clearToken() {
  sessionStorage.clear();
  window.location.reload();
}

function App() {
  const screenWidth = useScreenSize().width;

  const [menuIsActive, setMenuIsActive] = useState(false);

  const token = getToken();
  const userName = getUserName();
  
  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive)
  }
  
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div style={menuIsActive ? {height: 100 + 'vh'} : {height: 'auto'}} className={styles.App}>
        <Router>
          <Header userName={userName} clearToken={clearToken} token={token} menuIsActive={menuIsActive} toggleMenu={toggleMenu} screenWidth={screenWidth} />
            {screenWidth < 580 && <Nav screenWidth={screenWidth} menuIsActive={menuIsActive} />}
            <main>
              <Switch>
                <Route exact path="/" component={() => <Home userToken={token} />} />
                <Route exact path ="/pricing" component={Pricing}/>
                <Route exact path="/doc" component={Doc}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                {!token && (
                  <>
                    <Route exact path="/login" component={() => <Connexion setToken={setToken} location={"/login"}/>}/>
                    <Route exact path="/signup" component={() => <Connexion setToken={setToken} location={"/signup"}/>}/>
                  </>
                )}
              </Switch>
            </main>
          <Footer/>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
