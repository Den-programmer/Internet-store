import { createStore, combineReducers, compose } from "redux"
import reducerAboutUS from "./reducers/reducerAboutUs"
import reducerHome from "./reducers/reducerHome"
import reducerApp from "./reducers/reducerApp"
import reducerBlog from "./reducers/reducerBlog"
import reducerShop from "./reducers/reducerShop"
import reducerProductPage from "./reducers/reducerProductPage"
import reducerLogin from "./reducers/reducerLogin"

const reducers = combineReducers({
    app: reducerApp,
    aboutUsPage: reducerAboutUS,
    homePage: reducerHome,
    shopPage: reducerShop,
    blogPage: reducerBlog,
    productPage: reducerProductPage,
    auth: reducerLogin
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers())

export default store