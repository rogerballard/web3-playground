import { dispatch } from '@rematch/core'
import store from '../utils/store'

const tokenInterface = {
  state: {
    balanceOf: {
      address: '',
      value: null,
      loading: false,
      error: null
    },
    decimals: {
      value: null,
      loading: false,
      error: null
    },
    decreaseApproval: {
      spender: '',
      subtractedValue: 0,
      value: null,
      loading: false,
      error: null
    },
    finishMinting: {
      error: null,
      loading: false
    },
    increaseApproval: {
      spender: '',
      addedValue: 0,
      value: null,
      loading: false,
      error: null
    },
    mint: {
      amount: 0,
      recipient: '',
      value: null,
      loading: false,
      error: null
    },
    mintingFinished: {
      value: null,
      loading: false,
      error: null
    },
    name: {
      value: null,
      loading: false,
      error: null
    },
    owner: {
      value: null,
      loading: false,
      error: null
    },
    symbol: {
      value: null,
      loading: false,
      error: null
    },
    totalSupply: {
      value: null,
      loading: false,
      error: null
    },
    transfer: {
      amount: 0,
      recipient: '',
      value: null,
      loading: false,
      error: null
    },
    transferOwnership: {
      recipient: '',
      loading: false,
      error: null
    }
  },
  reducers: {
    setBalanceOf (state, payload) {
      return {
        ...state,
        balanceOf: {
          ...state.balanceOf,
          ...payload
        }
      }
    },
    setDecimals (state, payload) {
      return {
        ...state,
        decimals: {
          ...state.decimals,
          ...payload
        }
      }
    },
    setDecreaseApproval (state, payload) {
      return {
        ...state,
        decreaseApproval: {
          ...state.decreaseApproval,
          ...payload
        }
      }
    },
    setFinishMinting (state, payload) {
      return {
        ...state,
        finishMinting: {
          ...state.finishMinting,
          ...payload
        }
      }
    },
    setIncreaseApproval (state, payload) {
      return {
        ...state,
        increaseApproval: {
          ...state.increaseApproval,
          ...payload
        }
      }
    },
    setMint (state, payload) {
      return {
        ...state,
        mint: {
          ...state.mint,
          ...payload
        }
      }
    },
    setMintingFinished (state, payload) {
      return {
        ...state,
        mintingFinished: {
          ...state.mintingFinished,
          ...payload
        }
      }
    },
    setName (state, payload) {
      return {
        ...state,
        name: {
          ...state.name,
          ...payload
        }
      }
    },
    setOwner (state, payload) {
      return {
        ...state,
        owner: {
          ...state.owner,
          ...payload
        }
      }
    },
    setSymbol (state, payload) {
      return {
        ...state,
        symbol: {
          ...state.symbol,
          ...payload
        }
      }
    },
    setTotalSupply (state, payload) {
      return {
        ...state,
        totalSupply: {
          ...state.totalSupply,
          ...payload
        }
      }
    },
    setTransfer (state, payload) {
      return {
        ...state,
        transfer: {
          ...state.transfer,
          ...payload
        }
      }
    },
    setTransferOwnership (state, payload) {
      return {
        ...state,
        transferOwnership: {
          ...state.transferOwnership,
          ...payload
        }
      }
    }
  },
  effects: {
    async balanceOf (payload, rootState) {
      this.setBalanceOf({ loading: true })
      /**
       * Fetch form values
       */
      const { address } = store.getState().account
      const {
        address: queryAddress
      } = store.getState().tokenInterface.balanceOf
      /**
       * Fetch contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the balanceOf method
       */
      return instance.methods
        .balanceOf(queryAddress === '' ? address : queryAddress)
        .call()
        .then((value) => this.setBalanceOf({ loading: false, value }))
    },
    async decimals (payload, rootState) {
      this.setDecimals({ loading: true })
      /**
       * Fetch contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the decimals method
       */
      return instance.methods
        .decimals()
        .call()
        .then((value) => this.setDecimals({ loading: false, value }))
    },
    async decreaseApproval (payload, rootState) {
      this.setDecreaseApproval({ loading: true })
      /**
       * Fetch form values
       */
      const { address } = store.getState().account
      const {
        spender,
        subtractedValue
      } = store.getState().tokenInterface.decreaseApproval
      /**
       * Fetch the contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the decreaseApproval method
       */
      return instance.methods
        .decreaseApproval(spender === '' ? address : spender, subtractedValue)
        .send({ from: address })
        .on('error', (error) => this.setDecreaseApproval({
          loading: false, error
        }))
        .then(() => this.setDecreaseApproval({
          loading: false,
          subtractedValue: 0,
          spender: '',
          error: null
        }))
    },
    async finishMinting (payload, rootState) {
      this.setFinishMinting({ loading: true })
      /**
       * Fetch the contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the mint method
       */
      const { address } = store.getState().account
      return instance.methods
        .finishMinting()
        .send({ from: address })
        .on('error', (error) => this.setFinishMinting({
          loading: false,
          error
        }))
        .then(() => this.setFinishMinting({
          loading: false,
          error: null
        }))
        .then(() => dispatch.tokenInterface.mintingFinished())
    },
    async increaseApproval (payload, rootState) {
      this.setIncreaseApproval({ loading: true })
      /**
       * Fetch form values
       */
      const { address } = store.getState().account
      const {
        spender,
        addedValue
      } = store.getState().tokenInterface.increaseApproval
      /**
       * Fetch the contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the increaseApproval method
       */
      return instance.methods
        .decreaseApproval(spender === '' ? address : spender, addedValue)
        .send({ from: address })
        .on('error', (error) => this.setIncreaseApproval({
          loading: false, error
        }))
        .then(() => this.setIncreaseApproval({
          loading: false,
          addedValue: 0,
          spender: '',
          error: null
        }))
    },
    async loadBasicData (payload, rootState) {
      /**
       * Initialise data from contract
       */
      return Promise.all([
        dispatch.tokenInterface.decimals(),
        dispatch.tokenInterface.mintingFinished(),
        dispatch.tokenInterface.name(),
        dispatch.tokenInterface.owner(),
        dispatch.tokenInterface.symbol(),
        dispatch.tokenInterface.totalSupply()
      ])
    },
    async mint (payload, rootState) {
      this.setMint({ loading: true })
      /**
       * Fetch form values
       */
      const { address } = store.getState().account
      const { amount, recipient } = store.getState().tokenInterface.mint
      /**
       * Fetch the contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the mint method
       */
      return instance.methods
        .mint(recipient === '' ? address : recipient, amount)
        .send({ from: address })
        .on('error', (error) => this.setMint({ loading: false, error }))
        .then(() => this.setMint({
          loading: false,
          amount: 0,
          recipient: '',
          error: null
        }))
        .then(() => dispatch.tokenInterface.totalSupply())
    },
    async mintingFinished (payload, rootState) {
      this.setMintingFinished({ loading: true })
      /**
       * Fetch contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the mintingFinished method
       */
      return instance.methods
        .mintingFinished()
        .call()
        .then((value) => this.setMintingFinished({ loading: false, value }))
    },
    async name (payload, rootState) {
      this.setName({ loading: true })
      /**
       * Fetch contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the name method
       */
      return instance.methods
        .name()
        .call()
        .then((value) => this.setName({ loading: false, value }))
    },
    async owner (payload, rootState) {
      this.setOwner({ loading: true })
      /**
       * Fetch contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the owner method
       */
      return instance.methods
        .owner()
        .call()
        .then((value) => this.setOwner({ loading: false, value }))
    },
    async symbol (payload, rootState) {
      this.setSymbol({ loading: true })
      /**
       * Fetch contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the symbol method
       */
      return instance.methods
        .symbol()
        .call()
        .then((value) => this.setSymbol({ loading: false, value }))
    },
    async totalSupply (payload, rootState) {
      this.setTotalSupply({ loading: true })
      /**
       * Fetch contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the totalSupply method
       */
      return instance.methods
        .totalSupply()
        .call()
        .then((value) => this.setTotalSupply({ loading: false, value }))
    },
    async transfer (payload, rootState) {
      this.setTransfer({ loading: true })
      /**
       * Fetch form values
       */
      const { address } = store.getState().account
      const { amount, recipient } = store.getState().tokenInterface.transfer
      /**
       * Fetch the contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the mint method
       */
      return instance.methods
        .transfer(recipient === '' ? address : recipient, amount)
        .send({ from: address })
        .on('error', (error) => this.setTransfer({ loading: false, error }))
        .then(() => this.setTransfer({
          loading: false,
          amount: 0,
          recipient: '',
          error: null
        }))
    },
    async transferOwnership (payload, rootState) {
      this.setTransferOwnership({ loading: true })
      /**
       * Fetch form value
       */
      const { address } = store.getState().account
      const { recipient } = store.getState().tokenInterface.transferOwnership
      /**
       * Fetch the contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the transferOwnership method
       */
      return instance.methods
        .transferOwnership(recipient === '' ? address : recipient)
        .send({ from: address })
        .on('error', (error) => this.setTransferOwnership({
          loading: true,
          error
        }))
        .then(() => this.setTransferOwnership({
          loading: false,
          error: null,
          recipient: ''
        }))
        .then(() => dispatch.tokenInterface.owner())
    }
  },
  selectors: {
    loadingBasicData (state) {
      return state.decimals.loading
        || state.mintingFinished.loading
        || state.name.loading
        || state.owner.loading
        || state.symbol.loading
        || state.totalSupply.loading
    }
  }
}

export default tokenInterface
