import { Component } from 'react'
import { providers } from 'ethers'
import { dispatch } from '@rematch/core'

class EthereumProvider extends Component {
  render () {
    this.connect()
    return this.props.children
  }
  connect () {
    const uri = 'http://localhost:7545'
    const provider = new providers.JsonRpcProvider('http://localhost:7545')
    dispatch.provider.init({ provider, network: 'Local', uri })
    console.log('Connected to Local Ethereum Provider: ' + uri)
  }
}

export default EthereumProvider
