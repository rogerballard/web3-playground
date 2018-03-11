/**
 * Import dependencies
 */
import store from '../utils/store'

/**
 * Define token model
 * @type {Object}
 */
const token = {
  state: {
    compiled: null,
    contract: null,
    instances: []
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
        instances: [
          ...state.instances,
          {
            ...payload,
            timestamp: new Date()
          }
        ]
      }
    },
  },
  effects: {
    async deploy (payload, rootState) {
      /**
       * Set compiled contract
       */
      const compiled = require('../utils/Token.json')
      this.setCompiled(compiled)
      /**
       * Fetch web3 from store
       */
      const web3 = Object.assign({}, store.getState().web3.instance)
      /**
       * Define contract and set to store
       */
      let contract = new web3.eth.Contract(compiled.abi)
      this.setContract(contract)
      /**
       * Produce contract transaction
       */
      const options = {
        data: compiled.bytecode,
        arguments: [ payload.name, payload.symbol, payload.decimals ]
      }
      let transaction = await contract.deploy(options)
      /**
       * Send transaction
       */
      const address = store.getState().account.address
      return transaction
        .send({ from: address, gas: 1500000 })
        .on('receipt', (receipt) => this.setInstance(receipt))
    }
  }
}

export default token
