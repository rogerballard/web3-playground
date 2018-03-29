import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import ConnectTokenForm from '../organisms/ConnectTokenForm'

const mapState = (state) => ({
  address: state.connectTokenForm.address,
  deployedContracts: state.contracts.token
    .map(c => ({ key: c.address, value: c.address, text: c.address })),
  loading: state.connectTokenForm.loading,
  disabled: state.connectTokenForm.disabled || state.account.address === null,
  error: state.connectTokenForm.error
})

const mapDispatch = (state) => ({
  onChange: (e, { value }) => dispatch.connectTokenForm.setAddress(value),
  onSubmit: async () => dispatch.tokenContract.connect()
})

export default connect(mapState, mapDispatch)(ConnectTokenForm)
