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
      cgpa: "",
      credit: "",
    },
    secondSem: {
      cgpa: "",
      credit: "",
    },
    thirdSem: {
      cgpa: "",
      credit: "",
    },
    fourthSem: {
      cgpa: "",
      credit: "",
    },
    fivethSem: {
      cgpa: "",
      credit: "",
    },
    sixthSem: {
      cgpa: "",
      credit: "",
    },
    seventhSem: {
      cgpa: "",
      credit: "",
    },
    eightthSem: {
      cgpa: "",
      credit: "",
      
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
