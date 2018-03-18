import React, { Component } from 'react'
import { dispatch } from '@rematch/core'

import getWeb3 from '../../utils/getWeb3'

class Web3Provider extends Component {
  async componentWillMount () {
    let web3 = await getWeb3()
    dispatch.web3.init({ instance: web3 })
  }
  render () {
    return this.props.children
  }
}

export default Web3Provider
