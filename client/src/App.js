import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/home/landingPage'
import UserProfile from './components/userProfile'
import React from 'react';
import Home from './components/home/home.jsx';
import DashBoard from './components/dashBoard.jsx';


function App() {
  return (
    <div>
      <>
    <Router>
      
      <Route
      exact path='/'
      component={LandingPage}
      />
      <Route 
      exact path='/userprofile'
      component={UserProfile}
      />
      
      <Route exact path='/home' render={()=> <Home/> }/>

      <Route exact path='/dashboard' render={()=> <DashBoard/> }/>

    </Router>
    </>
      </div>
  );
}

export default App;