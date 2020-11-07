
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/home/landingPage.jsx';
import Home from './components/home/home.jsx';
import DashBoard from './components/dashBoard.jsx';


function App() {
  return (
    <Router>

      <Route exact path='/' render={()=> <LandingPage/> }/>
      
      <Route exact path='/home' render={()=> <Home/> }/>

      <Route exact path='/dashboard' render={()=> <DashBoard/> }/>

    </Router>
  );
}

export default App;