import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import TokenContractInterface from '../organisms/TokenContractInterface'

const mapState = (state) => ({
  visible: state.tokenContract.instance !== null,
  address: state.account.address,
  symbol: state.tokenContract.data.symbol,
  balanceOf: {
    address: state.tokenContract.methods.balanceOf.address,
    balance: state.tokenContract.methods.balanceOf.balance,
    loading: state.tokenContract.methods.balanceOf.loading
  },
  mint: {
    amount: state.tokenContract.methods.mint.amount,
    recipient: state.tokenContract.methods.mint.recipient,
    loading: state.tokenContract.methods.mint.loading
  },
  transfer: {
    amount: state.tokenContract.methods.transfer.amount,
    recipient: state.tokenContract.methods.transfer.recipient,
    result: state.tokenContract.methods.transfer.result,
    loading: state.tokenContract.methods.transfer.loading
  }
})

const mapDispatch = (state) => ({
  onChangeBalanceOf: (e, { name, value }) => dispatch.tokenContract.setBalanceOfData({ [name]: value }),
  onSubmitBalanceOf: async () => dispatch.tokenContract.balanceOf(),
  onChangeMint: (e, { name, value }) => dispatch.tokenContract.setMintData({ [name]: value }),
  onSubmitMint: async () => dispatch.tokenContract.mint(),
  onChangeTransfer: (e, { name, value }) => dispatch.tokenContract.setTransferData({ [name]: value }),
  onSubmitTransfer: async () => dispatch.tokenContract.transfer()
})

export default connect(mapState, mapDispatch)(TokenContractInterface)
