import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import DeployTokenForm from '../organisms/DeployTokenForm'

const mapState = (state) => ({
  name: state.deployTokenForm.name,
  symbol: state.deployTokenForm.symbol,
  decimals: state.deployTokenForm.decimals,
  loading: state.deployTokenForm.loading,
  disabled: state.deployTokenForm.disabled,
  visible: state.deployTokenForm.visible
})

const mapDispatch = (state) => ({
  onChange: (e, { name, value }) => dispatch.deployTokenForm.set({ [name]: value }),
  onSubmit: () => dispatch.tokenContract.deploy()
})

export default connect(mapState, mapDispatch)(DeployTokenForm)
