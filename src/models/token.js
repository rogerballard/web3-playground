
import store from '../utils/store'
/**
 * Define token model
 * @type {Object}
 */
const token = {
  state: {
    compiled: null,
    contract: null,
    instance: null
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
        instance: payload
      }
    }
  },
  effects: {
    async deploy (payload, rootState) {
      const compiled = require('../utils/Token.json')
      this.setCompiled(compiled)
      debugger
      let web3 = store.getState().web3.instance
      let contract = new web3.eth.Contract(compiled.abi)
      this.setContract(contract)
    }
  }
}

export default token
