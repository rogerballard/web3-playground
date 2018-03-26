import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Instructions from './pages/Instructions'
import TokenContract from './pages/TokenContract'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/instructions' component={Instructions} />
          <Route path='/contracts/token' component={TokenContract} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
