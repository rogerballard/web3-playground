import { Component } from 'react'
import { providers } from 'ethers'
import { dispatch } from '@rematch/core'

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
    const provider = new providers.Web3Provider(web3.currentProvider)
    dispatch.provider.init({ provider, type: 'Metamask' })
    console.log('Connected to Ethereum via Metamask')
  }
  async connectToLocalNetwork() {
    const uri = 'http://localhost:7545'
    const provider = await new providers.JsonRpcProvider(uri)
    dispatch.provider.init({ provider, type: 'JsonRpc' })
    console.log('Connected to Ethereum via Local Network')
  }
}

export default EthereumProvider
