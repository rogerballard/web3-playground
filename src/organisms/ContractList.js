/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import moment from 'moment'

/**
 * Define ContractList component
 * @extends Component
 */
class ContractList extends Component {

  render () {
    return (
      <Card.Group>
        {this._renderList()}
      </Card.Group>
    )
  }

  _renderList () {
    const { instances } = this.props
    return instances
      .sort((a, b) => a.blockNumber < b.blockNumber)
      .map(instance => this._renderListItem(instance))
  }

  _renderListItem (instance) {
    const { blockNumber, contractAddress, timestamp } = instance
    return (
      <Card
        key={contractAddress}
        header='Token Contract'
        meta={moment(timestamp).fromNow()}
        extra={'Block #' + blockNumber}
      />
    )
  }
}

const mapState = (state, props) => ({
  instances: state.token.instances
})

export default connect(mapState)(ContractList)
