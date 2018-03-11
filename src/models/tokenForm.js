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
