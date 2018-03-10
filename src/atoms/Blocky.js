/**
 * Import dependencies
 */
import React, { Component } from 'react'
import Blockies from 'react-blockies'

/**
 * Define Blocky component
 * @extends Component
 */
class Blocky extends Component {
  render () {
    return (
      <Blockies seed={this.props.seed || ''} />
    )
  }
}

export default Blocky
