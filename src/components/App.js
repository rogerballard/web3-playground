import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import store from '../utils/store'
import EthereumProvider from './containers/EthereumProvider'
import Router from './Router'

class App extends Component {
  render () {
    return (
      <EthereumProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </EthereumProvider>
    )
  }
}

export default App
