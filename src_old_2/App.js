/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from './organisms/Menu'
import Home from './pages/Home'
import Token from './pages/Token'

/**
 * Define App root
 * @extends Component
 */
class App extends Component {
  /**
   * Render the component
   */
  render () {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/token' component={Token} />
          <Route path='/crowdsale' component={null} />
        </Switch>
      </div>
    )
  }
}

export default App
