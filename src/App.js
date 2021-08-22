import React from 'react';
import './App.css';
import Home from './pages/Home';
import ROUTES from './constants/Routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './app/components/Header/Header';
import Footer from './app/components/Footer/Footer';

function App() {
  return (
    <div className="App">


      <Router>
        <Header />

        <Switch>
          <Route path={ROUTES.DASHBOARD} exact>
            <Home />

          </Route>
        </Switch>


        <Footer />

      </Router>




    </div>
  );
}

export default App;
