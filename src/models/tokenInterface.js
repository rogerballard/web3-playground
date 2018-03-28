import { dispatch } from '@rematch/core'
import store from '../utils/store'

const tokenInterface = {
  state: {
    allowance: {
      owner: '',
      spender: '',
      value: null,
      loading: false,
      error: null
    },
    approve: {
      spender: '',
      amount: 0,
      value: null,
      loading: false,
      error: null
    },
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
      subtractValue: 0,
      value: null,
      loading: false,
      error: null
    },
    finishMinting: {
      error: null,
      loading: false,
      value: null
    },
    increaseApproval: {
      spender: '',
      addValue: 0,
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
    transferFrom: {
      from: '',
      to: '',
      amount: 0,
      value: null,
      loading: false,
      error: null
    },
    transferOwnership: {
      recipient: '',
      loading: false,
      error: null,
      value: null
    }
  },
  reducers: {
    setAllowance (state, payload) {
      return {
        ...state,
        allowance: {
          ...state.allowance,
          ...payload
        }
      }
    },
    setApprove (state, payload) {
      return {
        ...state,
        approve: {
          ...state.approve,
          ...payload
        }
      }
    },
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
    setTransferFrom (state, payload) {
      return {
        ...state,
        transferFrom: {
          ...state.transferFrom,
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
    async allowance (payload, rootState) {
      this.setAllowance({ loading: true })
      /**
       * Fetch form values
       */
      const { address } = store.getState().account
      const { owner, spender } = store.getState().tokenInterface.allowance
      /**
       * Fetch contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the allowance method
       */
      return instance.methods
        .allowance(
          owner === '' ? address : owner,
          spender === '' ? address : spender
        )
        .call()
        .then((value) => this.setAllowance({ loading: false, value }))
    },
    async approve (payload, rootState) {
      this.setApprove({ loading: true })
      /**
       * Fetch form values
       */
      const { address } = store.getState().account
      const { amount, spender } = store.getState().tokenInterface.approve
      /**
       * Fetch contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the allowance method
       */
      return instance.methods
        .approve(spender === '' ? address : spender, amount)
        .send({ from: address })
        .on('error', (error) => this.setApprove({
          loading: false,
          error,
          value: null
        }))
        .then((receipt) => this.setApprove({
          loading: false,
          error: null,
          spender: '',
          amount: 0,
          value: receipt.events.Approval.returnValues
        }))
    },
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
        subtractValue
      } = store.getState().tokenInterface.decreaseApproval
      /**
       * Fetch the contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the decreaseApproval method
       */
      return instance.methods
        .decreaseApproval(spender === '' ? address : spender, subtractValue)
        .send({ from: address })
        .on('error', (error) => this.setDecreaseApproval({
          loading: false, error
        }))
        .then((receipt) => this.setDecreaseApproval({
          loading: false,
          subtractValue: 0,
          spender: '',
          error: null,
          value: receipt.events.Approval.returnValues
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
          error,
          value: null
        }))
        .then((receipt) => this.setFinishMinting({
          loading: false,
          error: null,
          value: receipt.events.MintFinished !== null
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
        addValue
      } = store.getState().tokenInterface.increaseApproval
      /**
       * Fetch the contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the increaseApproval method
       */
      return instance.methods
        .increaseApproval(spender === '' ? address : spender, addValue)
        .send({ from: address })
        .on('error', (error) => this.setIncreaseApproval({
          loading: false, error
        }))
        .then((receipt) => this.setIncreaseApproval({
          loading: false,
          addValue: 0,
          spender: '',
          error: null,
          value: receipt.events.Approval.returnValues
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
        .on('error', (error) => this.setMint({
          loading: false,
          error,
          value: null
        }))
        .then((receipt) => this.setMint({
          loading: false,
          amount: 0,
          recipient: '',
          value: receipt.events.Mint.returnValues,
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
        .on('error', (error) => this.setTransfer({
          loading: false,
          error,
          value: null
        }))
        .then((receipt) => this.setTransfer({
          loading: false,
          amount: 0,
          recipient: '',
          error: null,
          value: receipt.events.Transfer.returnValues
        }))
    },
    async transferFrom (payload, rootState) {
      this.setTransferFrom({ loading: true })
      /**
       * Fetch form values
       */
      const { address } = store.getState().account
      const { amount, to, from } = store.getState().tokenInterface.transferFrom
      /**
       * Fetch the contract instance
       */
      const { instance } = store.getState().tokenContract
      /**
       * Call the mint method
       */
      return instance.methods
        .transferFrom(
          from === '' ? address : from,
          to === '' ? address : to,
          amount
        )
        .send({ from: address })
        .on('error', (error) => this.setTransferFrom({ loading: false, error }))
        .then((receipt) => this.setTransferFrom({
          loading: false,
          amount: 0,
          from: '',
          to: '',
          error: null,
          value: receipt.events.Transfer.returnValues
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
          error,
          value: null
        }))
        .then((receipt) => this.setTransferOwnership({
          loading: false,
          error: null,
          recipient: '',
          value: receipt.events.OwnershipTransferred.returnValues
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
