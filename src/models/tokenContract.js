import { dispatch } from '@rematch/core'
import store from '../utils/store'

const tokenContract = {
  state: {
    error: null,
    initialised: false,
    instance: null,
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
       * Ensure the address is not empty
       */
      const code = await web3.eth.getCode(address)
      if (code === '0x0') {
        return dispatch.connectTokenForm.setError('No contract found at address')
      }
      /**
       * Initialise contract from abi and contract address
       */
      const instance = new web3.eth.Contract(abi, address)
      /**
       * Update state
       */
      this.setInstance(instance)
      /**
       * Call initialise method in tokenInterface
       */
      await dispatch.tokenInterface.loadBasicData()
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
        .then(() => dispatch.tokenInterface.loadBasicData())
    }
  }
}

export default tokenContract
