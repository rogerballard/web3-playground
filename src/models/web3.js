const web3 = {
  state: {
    instance: null
  },
  reducers: {
    init (state, payload) {
      return Object.assign({}, state, { instance: payload.instance })
    }
  }
}

export default web3
