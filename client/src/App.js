
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/home/landingPage'
import UserProfile from './components/userProfile'
import React from 'react'


function App() {
  return (
    <div>
    
    <Router>
      
      <Route
      exact path='/'
      component={LandingPage}
      />
      <Route 
      exact path='/userprofile'
      component={UserProfile}
      />
      
    </Router>
    
      </div>
  );
}

export default App;