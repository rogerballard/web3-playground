const connectTokenForm = {
  state: {
    address: '0x12345...',
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
