import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import TokenContractInterface from '../organisms/TokenContractInterface'

const mapState = (state) => ({
  visible: state.tokenContract.instance !== null,
  mint: {
    amount: state.tokenContract.methods.mint.amount,
    recipient: state.tokenContract.methods.mint.recipient
  }
})

const mapDispatch = (state) => ({
  onChangeMint: (e, { name, value }) => dispatch.tokenContract.setMintData({ [name]: value }),
  onSubmitMint: async () => dispatch.tokenContract.mint()
})

export default connect(mapState, mapDispatch)(TokenContractInterface)
