import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import store from '../utils/store'
import Web3Provider from './containers/Web3Provider'
import Router from './Router'

class App extends Component {
  render () {
    return (
      <Web3Provider>
        <Provider store={store}>
          <Router />
        </Provider>
      </Web3Provider>
    )
  }
}

export default App
