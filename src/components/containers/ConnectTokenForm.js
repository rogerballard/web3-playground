import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import ConnectTokenForm from '../organisms/ConnectTokenForm'

const mapState = (state) => ({
  address: state.connectTokenForm.address,
  loading: state.connectTokenForm.loading,
  disabled: state.connectTokenForm.disabled,
  visible: state.connectTokenForm.visible
})

const mapDispatch = (state) => ({
  onChange: (e, { name, value }) => dispatch.connectTokenForm.set({ [name]: value }),
  onSubmit: async () => dispatch.tokenContract.connect()
})

export default connect(mapState, mapDispatch)(ConnectTokenForm)
