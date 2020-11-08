
<<<<<<< HEAD
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/home/landingPage'
import UserProfile from './components/userProfile'
import React from 'react'
=======
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/home/landingPage.jsx';
import Home from './components/home/home.jsx';
import DashBoard from './components/dashBoard.jsx';
>>>>>>> main


function App() {
  return (
    <div>
      <>
    <Router>
<<<<<<< HEAD
      
      <Route
      exact path='/'
      component={LandingPage}
      />
      <Route 
      exact path='/userprofile'
      component={UserProfile}
      />
      
=======

      <Route exact path='/' render={()=> <LandingPage/> }/>
      
      <Route exact path='/home' render={()=> <Home/> }/>

      <Route exact path='/dashboard' render={()=> <DashBoard/> }/>

>>>>>>> main
    </Router>
    </>
      </div>
  );
}

export default App;