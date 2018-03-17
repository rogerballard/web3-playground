/**
 * Define web3 model
 * @type {Object}
 */
const web3 = {
  state: {
    instance: null
  },
  reducers: {
    init (state, payload) {
      return {
        instance: payload
      }
    }
  },
  effects: {
    
  }
}

export default web3
