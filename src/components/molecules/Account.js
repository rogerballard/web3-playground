import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label } from 'semantic-ui-react'

import Blocky from '../atoms/Blocky'

class Account extends Component {
  render () {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Label content='1.505' detail='ETH' size='medium' />
        <Blocky data={'0x1235124'} />
      </div>
    )
  }
}

Account.propTypes = {
  address: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired
}

export default Account
