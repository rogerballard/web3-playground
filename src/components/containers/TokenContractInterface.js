import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import TokenContractInterface from '../organisms/TokenContractInterface'

const mapState = (state) => ({
  address: state.account.address,
  balanceOf: state.tokenInterface.balanceOf,
  finishMinting: state.tokenInterface.finishMinting,
  mint: state.tokenInterface.mint,
  mintingFinished: state.tokenInterface.mintingFinished,
  symbol: state.tokenInterface.symbol.value,
  transfer: state.tokenInterface.transfer
})

const mapDispatch = (state) => ({
  onChangeBalanceOf: (e, { name, value }) => dispatch.tokenInterface.setBalanceOf({ [name]: value }),
  onSubmitBalanceOf: async () => dispatch.tokenInterface.balanceOf(),
  onChangeFinishMinting: (e, { name, value }) => dispatch.tokenInterface.setFinishMinting({ [name]: value }),
  onSubmitFinishMinting: async () => dispatch.tokenInterface.finishMinting(),
  onChangeMint: (e, { name, value }) => dispatch.tokenInterface.setMint({ [name]: value }),
  onSubmitMint: async () => dispatch.tokenInterface.mint(),
  onChangeTransfer: (e, { name, value }) => dispatch.tokenInterface.setTransfer({ [name]: value }),
  onSubmitTransfer: async () => dispatch.tokenInterface.transfer()
})

export default connect(mapState, mapDispatch)(TokenContractInterface)
