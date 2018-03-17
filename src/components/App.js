import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

import store from '../utils/store'
import Router from './Router'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
