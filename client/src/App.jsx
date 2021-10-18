import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import NotFound from './components/NotFound';

import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;