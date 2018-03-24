import { dispatch } from '@rematch/core'
import store from '../utils/store'

const tokenContract = {
  state: {
    data: {
      name: null,
      symbol: null,
      decimals: null,
      totalSupply: null,
      owner: null,
      mintingFinished: null
    },
    compiled: null,
    instance: null
  },
  reducers: {
    setData (state, payload) {
      return {
        ...state,
        data: {
          ...state.data,
          ...payload
        }
      }
    },
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
       * Update UI
       */
      dispatch.deployTokenForm.toggleLoading()
      dispatch.connectTokenForm.toggleDisabled()
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
        // .on('transactionHash', (txhash) => console.log('txhash', txhash))
        // .on('receipt', (receipt) => console.log('receipt', receipt))
        // .on('confirmation', (conf, receipt) => console.log('conf', conf, receipt))
        .then((instance) => {
          /**
           * Update the UI
           */
          dispatch.deployTokenForm.toggleLoading()
          dispatch.deployTokenForm.toggleVisible()
          dispatch.connectTokenForm.toggleDisabled()
          dispatch.connectTokenForm.toggleVisible()
          this.setInstance(instance)
        })
        /**
         * Initialise the store with data from the contract
         */
        .then(() => this.initData())
    },
    async connect (payload, rootState) {
      /**
       * Update UI
       */
      dispatch.connectTokenForm.toggleLoading()
      dispatch.deployTokenForm.toggleDisabled()
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
       * Fetch the contract address from the store
       */
      const contractAddress = store.getState().connectTokenForm.address
      /**
       * Define contract and set in store
       */
      const abi = store.getState().tokenContract.compiled.abi
      const contract = new web3.eth.Contract(abi, contractAddress)
      this.setContract(contract)
      this.setInstance(contract)
      /**
       * Update the UI
       */
      dispatch.connectTokenForm.toggleLoading()
      dispatch.connectTokenForm.toggleVisible()
      dispatch.deployTokenForm.toggleDisabled()
      dispatch.deployTokenForm.toggleVisible()
      /**
       * Initialise the store with data from the contract
       */
      await this.initData()
    },
    async initData (payload, rootState) {
      /**
       * Fetch the contract instance
       */
      const instance = store.getState().tokenContract.instance

      /**
       * Call individual methods to fetch data from the contract
       */
      return Promise.all([
        await instance.methods.name().call(),
        await instance.methods.symbol().call(),
        await instance.methods.decimals().call(),
        await instance.methods.totalSupply().call(),
        await instance.methods.owner().call(),
        await instance.methods.mintingFinished().call()
      ]).then(values => {
        /**
         * Update the state data so we don't have to call the contract every
         * time
         */
        this.setData({
          name: values[0],
          symbol: values[1],
          decimals: values[2],
          totalSupply: values[3],
          owner: values[4],
          mintingFinished: values[5]
        })
      })
    }
  }
}

export default tokenContract
