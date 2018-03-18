import React, { Component } from 'react'

import TwoColumn from '../templates/TwoColumn'
import AppBar from '../organisms/AppBar'

class TokenContract extends Component {
  render () {
    return (
      <TwoColumn
        topComponent={<AppBar />}
        leftComponent={<div>Left</div>}
        rightComponent={<div>Right</div>}
      />
    )
  }
}

export default TokenContract
