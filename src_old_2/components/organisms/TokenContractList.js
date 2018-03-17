/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'
import { Card } from 'semantic-ui-react'
import moment from 'moment'

/**
 * Define TokenContractList component
 * @extends Component
 */
class TokenContractList extends Component {
  /**
   * Render the component
   */
  render () {
    return (
      <Card.Group>
        {this._renderList()}
      </Card.Group>
    )
  }
  /**
   * Render the contract list
   */
  _renderList () {
    const { instances } = this.props
    return instances
      .sort((a, b) => a.blockNumber < b.blockNumber)
      .map(instance => this._renderListItem(instance))
  }
  /**
   * Render a single list item
   */
  _renderListItem (instance) {
    const { blockNumber, contractAddress, timestamp } = instance
    return (
      <Card
        key={contractAddress}
        header='Token Contract'
        meta={moment(timestamp).fromNow()}
        extra={'Block #' + blockNumber}
        onClick={(instance) => dispatch.token.selectInstance(instance)}
      />
    )
  }
}

const mapState = (state, props) => ({
  instances: state.token.instances
})

export default connect(mapState)(TokenContractList)
