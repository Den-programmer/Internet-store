import { createStore, combineReducers, compose } from "redux"
import reducerAboutUS from "./reducers/reducerAboutUs"

const reducers = combineReducers({
    aboutUsPage: reducerAboutUS
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers())

export default store