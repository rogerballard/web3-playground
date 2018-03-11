/**
 * Define tokenForm model
 * @type {Object}
 */
const tokenForm = {
  state: {
    name: 'Balrog Coin',
    symbol: 'BLRG',
    decimals: 18,
    loading: false
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
    }
  },
  effects: {

  }
}

export default tokenForm
