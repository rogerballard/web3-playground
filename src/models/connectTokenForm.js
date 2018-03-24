const connectTokenForm = {
  state: {
    address: '0x12345...',
    loading: false,
    disabled: false,
    visible: true
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
    },
    toggleVisible (state, payload) {
      return {
        ...state,
        visible: !state.visible
      }
    }
  }
}

export default connectTokenForm
