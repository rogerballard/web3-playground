import { dispatch } from '@rematch/core'
import Web3 from 'web3'

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
  subscriptions: {
    'provider/init': async (action, state, unsubscribe) => {
      const web3 = new Web3(window.web3.currentProvider)
      /**
       * Fetch current address
       */
      let address = await web3.eth.getAccounts().then(accounts => accounts[0])
      dispatch.account.setAddress(address)
      /**
       * Fetch address balance
       */
      let balance = await web3.eth.getBalance(address)
      dispatch.account.setBalance(balance)
    }
  }
}

export default account
