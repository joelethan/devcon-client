import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Login from './component/auth/login';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Landing from './component/layout/Landing';
import Register from './component/auth/register';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={ Landing } />
        <div className='container'>
          <Route exact path='/register' component={ Register } />
          <Route exact path='/login' component={ Login } />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
