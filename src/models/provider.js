const provider = {
  state: {
    provider: null,
    type: null
  },
  reducers: {
    init (state, { provider, type }) {
      return {
        provider,
        type
      }
    }
  }
}

export default provider
