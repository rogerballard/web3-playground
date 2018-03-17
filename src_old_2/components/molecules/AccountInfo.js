import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Blocky from '../atoms/Blocky'

/**
 * Define AccountInfo component
 * @extends Component
 */
class AccountInfo extends Component {
  render () {
    const { address, balance } = this.props
    return (
      <div>
        <span>
          {balance}
        </span>
        <Blocky seed={address} />
      </div>
    )
  }
}

AccountInfo.propTypes = {
  address: PropTypes.string,
  balance: PropTypes.string
}

const mapState = (state) => ({
  address: state.account.address,
  balance: state.account.balance
})

export default connect(mapState)(AccountInfo)
