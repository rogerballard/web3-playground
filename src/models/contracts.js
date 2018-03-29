const contracts = {
  state: {
    token: []
  },
  reducers: {
    addToken (state, payload) {
      return {
        ...state,
        token: [
          ...state.token,
          payload
        ]
      }
    }
  }
}

export default contracts
