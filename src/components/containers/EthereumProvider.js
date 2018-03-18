import { Component } from 'react'
import { dispatch } from '@rematch/core'
import Web3 from 'web3'

class EthereumProvider extends Component {
  componentWillMount () {
    this.connect()
  }
  render () {
    return this.props.children
  }

  async connect () {
    const web3 = window.web3
    if (typeof web3 !== 'undefined') {
      await this.connectToMetamask(web3)
    } else {
      await this.connectToLocalNetwork()
    }
  }
  async connectToMetamask (web3) {
    dispatch.provider.init({ provider: web3.currentProvider, type: 'Metamask' })
    console.log('Connected to Ethereum via Metamask')
  }
  async connectToLocalNetwork() {
    const uri = 'http://localhost:7545'
    const provider = new Web3.providers.HttpProvider(uri)
    dispatch.provider.init({ provider, type: 'JsonRPC' })
    console.log('Connected to Ethereum via Local Network')
  }
}

export default EthereumProvider
