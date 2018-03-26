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
    }
  },
  effects: {

  },
  subscriptions: {

  }
}

export default tokenInterface
