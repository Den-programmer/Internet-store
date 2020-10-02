import { createStore, combineReducers, compose } from "redux"
import reducerAboutUS from "./reducers/reducerAboutUs"
import reducerHome from "./reducers/reducerHome"

const reducers = combineReducers({
    aboutUsPage: reducerAboutUS,
    homePage: reducerHome
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers())

export default store