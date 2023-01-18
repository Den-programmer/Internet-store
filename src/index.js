import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import './i18nextConfig'
import i18next from 'i18next'

export const changeLanguage = (lang = 'en') => {
  i18next.changeLanguage(lang)
}

ReactDOM.render(
  <Suspense fallback="...">
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App changeLanguage={changeLanguage}/>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
