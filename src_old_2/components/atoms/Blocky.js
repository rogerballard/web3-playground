/**
 * Import dependencies
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Blockies from 'react-blockies'

/**
 * Define Blocky component
 * @extends Component
 */
class Blocky extends Component {
  render () {
    return (
      <Blockies seed={this.props.data || ''} />
    )
  }
}

Blocky.propTypes = {
  data: PropTypes.string.isRequired
}

export default Blocky
