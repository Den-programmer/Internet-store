import { createStore, combineReducers, compose } from "redux"
import reducerAboutUS from "./reducers/reducerAboutUs"
import reducerHome from "./reducers/reducerHome"
import reducerApp from "./reducers/reducerApp"
import reducerBlog from "./reducers/reducerBlog"

const reducers = combineReducers({
    app: reducerApp,
    aboutUsPage: reducerAboutUS,
    homePage: reducerHome,
    blogPage: reducerBlog,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers())

export default store