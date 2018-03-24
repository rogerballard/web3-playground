import store from '../utils/store'

const tokenContract = {
  state: {
    data: {
      name: 'Balrog token',
      symbol: 'BLRG',
      decimals: 18,
      totalSupply: 1000000,
      owner: '0x012345...',
      mintingFinished: false
    },
    compiled: null,
    instance: null
  },
  reducers: {
    setCompiled (state, payload) {
      return {
        ...state,
        compiled: payload
      }
    },
    setContract (state, payload) {
      return {
        ...state,
        contract: payload
      }
    },
    setInstance (state, payload) {
      return {
        ...state,
        instance: payload
      }
    }
  },
  effects: {
    async deploy (payload, rootState) {
      /**
       * Import contract json interface
       */
      const compiled = require('../contracts/Token/Token.json')
      this.setCompiled(compiled)
      /**
       * Fetch web3 instance from store
       */
      const web3 = store.getState().web3.instance
      /**
       * Define contract and set in store
       */
      const abi = store.getState().tokenContract.compiled.abi
      const contract = new web3.eth.Contract(abi)
      this.setContract(contract)
      /**
       * Create transaction to deploy the contract
       */
      const { name, symbol, decimals } = store.getState().deployTokenForm
      const options = {
        data: store.getState().tokenContract.compiled.bytecode,
        arguments: [ name, symbol, decimals ]
      }
      const transaction = await contract.deploy(options)
      /**
       * Submit the transaction
       */
      const address = store.getState().account.address
      return transaction
        .send({ from: address, gas: 1500000 })
        .on('error', (error) => console.log('error', error))
        .on('transactionHash', (txhash) => console.log('txhash', txhash))
        .on('receipt', (receipt) => console.log('receipt', receipt))
        .on('confirmation', (conf, receipt) => console.log('conf', conf, receipt))
        .then((instance) => this.setInstance(instance))
    }
  }
}

export default tokenContract
