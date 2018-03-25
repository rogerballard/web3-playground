import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import TokenContractInterface from '../organisms/TokenContractInterface'

const mapState = (state) => ({
  visible: state.tokenContract.instance !== null,
  address: state.account.address,
  mint: {
    amount: state.tokenContract.methods.mint.amount || 0,
    recipient: state.tokenContract.methods.mint.recipient || state.account.address,
    loading: state.tokenContract.methods.mint.loading
  }
})

const mapDispatch = (state) => ({
  onChangeMint: (e, { name, value }) => dispatch.tokenContract.setMintData({ [name]: value }),
  onSubmitMint: async () => dispatch.tokenContract.mint()
})

export default connect(mapState, mapDispatch)(TokenContractInterface)
