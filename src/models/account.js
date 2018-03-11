/**
 * Import dependencies
 */
import { dispatch } from '@rematch/core'

/**
 * Define account model
 * @type {Object}
 */
const account = {
  state: {
    address: null,
    balance: null
  },
  reducers: {
    setAddress (state, payload) {
      return {
        ...state,
        address: payload
      }
    },
    setBalance (state, payload) {
      return {
        ...state,
        balance: payload
      }
    }
  },
  effects: {

  },
  subscriptions: {
    'web3/init': async (action, state, unsubscribe) => {
      /**
       * Get web3 instance
       */
      let web3 = action.payload
      /**
       * Fetch address from provider
       */
      let address = await web3.eth.getAccounts().then(accounts => accounts[0])
      dispatch.account.setAddress(address)
      /**
       * Fetch balance for address
       */
      let balance = await web3.eth.getBalance(address)
      dispatch.account.setBalance(balance)
    }
  }
}

export default account
