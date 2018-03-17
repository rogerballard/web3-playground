/**
 * Import dependencies
 */
import React, { Component } from 'react'

import BasePage from '../templates/BasePage'

/**
 * Define Home page
 * @extends Component
 */
class Home extends Component {
  /**
   * Render the component
   */
  render () {
    return (
      <BasePage>
        <div>
          <h1>Home Page</h1>
        </div>
      </BasePage>
    )
  }
}

export default Home
