import store from '../utils/store'

const tokenInstance = {
  state: {
    instance: null,
    initialised: false,
    error: null,
    loading: false
  },
  reducers: {
    setError (state, payload) {
      return {
        ...state,
        error: payload,
        loading: false
      }
    },
    setInstance (state, payload) {
      return {
        ...state,
        error: null,
        initialised: payload.options.address !== null,
        instance: payload,
        loading: false
      }
    },
    toggleLoading (state, payload) {
      return {
        ...state,
        loading: !state.loading
      }
    }
  },
  effects: {
    async connect (payload, rootState) {
      this.toggleLoading()
      /**
       * Import contract json interface
       */
      const { abi } = require('../contracts/Token/Token.json')
      /**
       * Fetch web3 instance from store
       */
      const { instance: web3 } = store.getState().web3
      /**
       * Fetch the contract address from the store
       */
      const { address } = store.getState().connectTokenForm
      /**
       * Initialise contract from abi and contract address
       */
      const instance = new web3.eth.Contract(abi, address)
      /**
       * Update state
       */
      this.setInstance(instance)
    },
    async deploy (payload, rootState) {
      this.toggleLoading()
      /**
       * Import contract json interface
       */
      const { abi, bytecode } = require('../contracts/Token/Token.json')
      /**
       * Fetch web3 instance from store
       */
      const { instance: web3 } = store.getState().web3
      /**
       * Initialise contract from abi
       */
      const contract = new web3.eth.Contract(abi)
      /**
       * Fetch constructor arguments from store
       */
      const { name, symbol, decimals } = store.getState().deployTokenForm
      /**
       * Create transaction to deploy the contract
       */
      const options = { data: bytecode, arguments: [ name, symbol, decimals ] }
      const transaction = await contract.deploy(options)
      /**
       * Submit the transaction
       */
      const { address } = store.getState().account
      return transaction
        .send({ from: address, gas: 1500000 })
        /**
         * Update state
         */
        .on('error', (error) => this.setError(error))
        .then((instance) => this.setInstance(instance))
    }
  }
}

export default tokenInstance
