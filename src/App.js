import React, { Component } from 'react'
import AboutUs from './components/AboutUS/aboutUs'
import Home from './components/Home/home'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { setDate, setTotalProductsCount, countTotal } from './redux/reducers/reducerApp'
import Shop from './components/Shop/shopContainer'
import Blog from './components/Blog/blog'
import Wishlist from './components/Wishlist/wishlist'
import LoginPage from './components/LoginPage/loginPage'
import ContactUs from './components/Contact Us/contactUs'
import CartPage from './components/CartPage/cartPage'
import CheckoutPage from './components/Checkout/checkoutPage'

class App extends Component {
  componentDidMount() {
    // Set date!
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

    // Set total products count!

    const totalProductsCount = this.props.products.length
    this.props.setTotalProductsCount(totalProductsCount)

    // Set productsInCart price total!

    let productsInCartTotalPrice = '0.00'
    for(let i = 0; i<this.props.productsInCart.length; i++) {
      productsInCartTotalPrice = Number(productsInCartTotalPrice) + Number(this.props.productsInCart[i].price) + '.00'
    }
    this.props.countTotal(productsInCartTotalPrice)
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/Checkout" render={() => <CheckoutPage />}/>
          <Route path="/CartPage" render={() => <CartPage />}/>
          <Route path="/MyAccount" render={() => <LoginPage />}/>
          <Route path="/ContactUs" render={() => <ContactUs />}/>
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
  products: state.app.products,
  productsInCart: state.app.productsInCart
})

const AppContainer = connect(mapStateToProps, { setDate, setTotalProductsCount, countTotal })(App)

export default AppContainer
