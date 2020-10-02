import React from 'react'
import AboutUs from './components/AboutUS/aboutUs'
import Home from './components/Home/home'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Home" render={() => <Home />}/>
        <Route path='/' render={() => <AboutUs />}/>
      </Switch>
    </div >
  )
}

export default App
