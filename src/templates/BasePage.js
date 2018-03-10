/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

/**
 * Define BasePage
 * @extends Component
 */
class BasePage extends Component {
  /**
   * Render the component
   */
  render () {
    return (
      <Container style={{ marginTop: '7em' }}>
        {this.props.children}
      </Container>
    )
  }
}

export default BasePage
