/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Web3Instance extends Component {
  render () {
    const { account } = this.props
    return (
      <div>
        {account}
      </div>
    )
  }
}

const mapState = (state) => ({
  account: state.web3.account
})

export default connect(mapState)(Web3Instance)
