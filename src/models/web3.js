/**
 * Define web3 model
 * @type {Object}
 */
const web3 = {
  state: {
    instance: null,
    account: null
  },
  reducers: {
    setInstance (state, payload) {
      return {
        ...state,
        instance: payload
      }
    },
    setAccount (state, payload) {
      return {
        ...state,
        account: payload
      }
    }
  },
  effects: {
    async init(payload, rootState) {
      this.setInstance(payload)
      let account = await payload.eth.getAccounts().then(accounts => accounts[0])
      this.setAccount(account)
    }
  }
}

export default web3
