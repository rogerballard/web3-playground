import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import store from '../utils/store'
import Web3Provider from './containers/Web3Provider'
import Router from './Router'
import '../styles/style.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Web3Provider>
          <Router />
        </Web3Provider>
      </Provider>
    )
  }
}

export default App
