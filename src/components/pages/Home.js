import React, { Component } from 'react'

import OneColumn from '../templates/OneColumn'
import AppBar from '../containers/AppBar'

class Home extends Component {
  render () {
    return (
      <OneColumn
        topComponent={<AppBar />}
        contentComponent={<div>Content</div>}
      />
    )
  }
}

export default Home
