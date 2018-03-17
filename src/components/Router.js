import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Example from './pages/Example'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Example} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
