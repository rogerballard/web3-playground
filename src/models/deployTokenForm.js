const deployTokenForm = {
  state: {
    name: 'Balrog Coin',
    symbol: 'BLRG',
    decimals: 18,
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
    reset (state, payload) {
      return {
        ...state,
        name: '',
        symbol: '',
        decimals: 18
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

export default deployTokenForm
