import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return(
        <div className="App">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                This is main
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default App;