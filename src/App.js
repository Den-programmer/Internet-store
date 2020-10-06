import React, { Component } from 'react'
import AboutUs from './components/AboutUS/aboutUs'
import Home from './components/Home/home'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setDate } from './redux/reducers/reducerApp'
import Blog from './components/Blog/blog'

class App extends Component {
  componentDidMount() {
    const newDate = new Date()
    const year = newDate.getFullYear()
    const month = newDate.getMonth()
    const day = newDate.getDay()
    const minutes = newDate.getMinutes()
    const date = {
      year,
      month,
      day,
      minutes
    }
    this.props.setDate(date)
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/Home/Blog" render={() => <Blog />}/>
          <Route path="/Home" render={() => <Home />} />
          <Route path='/' render={() => <AboutUs />} />
        </Switch>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({

})

const AppContainer = connect(mapStateToProps, { setDate })(App)

export default AppContainer
