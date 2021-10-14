import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
    return(
        <div className="App">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Home />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default App;