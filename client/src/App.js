
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/home/landingPage'
import React from 'react'


function App() {
  return (
    <Router>
      <Route
      exact path='/'
      render={()=> <LandingPage/> }
      />

    </Router>
  );
}

export default App;