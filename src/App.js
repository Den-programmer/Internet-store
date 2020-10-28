import React, { Component } from 'react'
import AboutUs from './components/AboutUS/aboutUs'
import Home from './components/Home/home'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setDate, setTotalProductsCount } from './redux/reducers/reducerApp'
import Shop from './components/Shop/shopContainer'
import Blog from './components/Blog/blog'
import Wishlist from './components/Wishlist/wishlist'
import LoginPage from './components/LoginPage/loginPage'

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

    const totalProductsCount = this.props.products.length
    this.props.setTotalProductsCount(totalProductsCount)
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/MyAccount" render={() => <LoginPage />}/>
          <Route path="/Home/Shop" render={() => <Shop />}/>
          <Route path="/Home/Blog" render={() => <Blog />}/>
          <Route path="/Home" render={() => <Home />} />
          <Route path="/Wishlist" render={() => <Wishlist />}/>
          <Route path='/' render={() => <AboutUs />} />
        </Switch>
      </div >
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.app.products
})

const AppContainer = connect(mapStateToProps, { setDate, setTotalProductsCount })(App)

export default AppContainer
