import React, { useState, createContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'

export const getSemDetails = createContext()

function App() {
  let initialState = {
    firstSem: {
      cgpa: 0.0,
      credit: 0.0,
    },
    secondSem: {
      cgpa: 0.0,
      credit: 0.0,
    },
    thirdSem: {
      cgpa: 0.0,
      credit: 0.0,
    },
    fourthSem: {
      cgpa: 0.0,
      credit: 0.0,
    },
    fivethSem: {
      cgpa: 0.0,
      credit: 0.0,
    },
    sixthSem: {
      cgpa: 0.0,
      credit: 0.0,
    },
    seventhSem: {
      cgpa: 0.0,
      credit: 0.0,
    },
    eightthSem: {
      cgpa: 0.0,
      credit: 0.0,
    },
  }

  const [state, setstate] = useState(initialState)
  return (
    <div className="App">
      <getSemDetails.Provider value={[state, setstate]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />

            {/* <Route  component={PagenotFound} /> */}
          </Switch>
        </Router>
      </getSemDetails.Provider>
    </div>
  )
}

export default App
