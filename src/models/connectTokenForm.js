const connectTokenForm = {
  state: {
    address: '',
    loading: false,
    disabled: false,
    error: null
  },
  reducers: {
    set (state, payload) {
      return {
        ...state,
        ...payload
      }
    },
    setAddress (state, payload) {
      return {
        ...state,
        address: payload
      }
    },
    setError (state, payload) {
      return {
        ...state,
        error: payload
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
