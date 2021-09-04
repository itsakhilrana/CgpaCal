import React, { useState, createContext } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Pagenotfound from './components/Pagenotfound'

export const getSemDetails = createContext()
export const setCgpaDetails = createContext()

function App() {
  
  let initialState = {
    firstSem: {
      cgpa: 0,
      credit: 0,
    },
    secondSem: {
      cgpa: 0,
      credit: 0,
    },
    thirdSem: {
      cgpa: 0,
      credit: 0,
    },
    fourthSem: {
      cgpa: 0,
      credit: 0,
    },
    fivethSem: {
      cgpa: 0,
      credit: 0,
    },
    sixthSem: {
      cgpa: 0,
      credit: 0,
    },
    seventhSem: {
      cgpa: 0,
      credit: 0,
    },
    eightthSem: {
      cgpa: 0,
      credit: 0,
      
    },
  }

  const [state, setstate] = useState(initialState)

  const [myCgpa, setmyCgpa] = useState(0)

  return (
    <div className="App">
      <setCgpaDetails.Provider value ={[myCgpa, setmyCgpa]}>
      <getSemDetails.Provider value={[state, setstate]}>
        <Router>
          <Navbar  />
          <Switch>
            <Route exact path="/"  component={Home} />
            

            <Route  component={Pagenotfound} />
          </Switch>
        </Router>
      </getSemDetails.Provider>
      </setCgpaDetails.Provider>
    </div>
  )
}

export default App
