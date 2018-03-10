/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Blocky from '../atoms/Blocky'

class AccountInfo extends Component {
  render () {
    const { account } = this.props
    return (
      <Blocky seed={account} />
    )
  }
}

const mapState = (state) => ({
  account: state.web3.account
})

export default connect(mapState)(AccountInfo)
