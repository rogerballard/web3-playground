const provider = {
  state: {
    provider: null,
    network: null,
    uri: null
  },
  reducers: {
    init (state, { provider, network, uri }) {
      return {
        provider,
        network,
        uri
      }
    }
  }
}

export default provider
