import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import {withAuthentication} from './components/Session';
import SideBar from './components/SideBar';
import ContentArea from './components/ContentArea';

const App = () => {
    // Switch in react-router-dom need to use an exact path for "/" otherwise it will also match "/..."
    // And it won't work
    return (
      <Router>
        <Navigation />
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="content-area">
          <ContentArea />
        </div>
      </Router>
    );
}

export default withAuthentication(App);
