/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Blocky from '../atoms/Blocky'

/**
 * Define AccountInfo component
 * @extends Component
 */
class AccountInfo extends Component {
  render () {
    const { account } = this.props
    return (
      <div>
        <span>
          {account}
        </span>
        <Blocky seed={account} />
      </div>
    )
  }
}

const mapState = (state) => ({
  account: state.web3.account
})

export default connect(mapState)(AccountInfo)
