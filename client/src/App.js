
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/home/landingPage'
import Home from './components/home/home'


function App() {
  return (
    <Router>

      <Route
      exact path='/'
      render={()=> <LandingPage/> }
      />
      
      <Route
      exact path='/home'
      render={()=> <Home /> }
      />

    </Router>
  );
}

export default App;