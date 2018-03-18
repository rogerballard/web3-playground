import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import TokenForm from '../organisms/TokenForm'

const mapState = (state) => ({
  name: state.tokenForm.name,
  symbol: state.tokenForm.symbol,
  decimals: state.tokenForm.decimals,
  loading: state.tokenForm.loading,
  disabled: state.tokenForm.disabled
})

const mapDispatch = (state) => ({
  onChange: (e, { name, value }) => dispatch.tokenForm.set({ [name]: value }),
  onSubmit: () => console.log('submit')
})

export default connect(mapState, mapDispatch)(TokenForm)
