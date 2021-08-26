import React from 'react';
import './App.css';
import Home from './pages/Home';
import ROUTES from './constants/Routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">


      <Router>
        <Header />

        <Switch>
          <Route path={ROUTES.DASHBOARD} exact>
            <Home />

          </Route>
          <Route path={ROUTES.PORTFOLIO} >
            <Portfolio />
          </Route>
        </Switch>


        <Footer />

      </Router>




    </div>
  );
}

export default App;
