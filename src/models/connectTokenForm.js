const connectTokenForm = {
  state: {
    address: '0x8CdaF0CD259887258Bc13a92C0a6dA92698644C0',
    loading: false,
    disabled: false
  },
  reducers: {
    set (state, payload) {
      return {
        ...state,
        ...payload
      }
    },
    toggleLoading (state, payload) {
      return {
        ...state,
        loading: !state.loading
      }
    },
    toggleDisabled (state, payload) {
      return {
        ...state,
        disabled: !state.disabled
      }
    }
  }
}

export default connectTokenForm
