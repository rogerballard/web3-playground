import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import TokenContractInterface from '../organisms/TokenContractInterface'

const mapState = (state) => ({
  address: state.account.address,
  allowance: state.tokenInterface.allowance,
  balanceOf: state.tokenInterface.balanceOf,
  decreaseApproval: state.tokenInterface.decreaseApproval,
  finishMinting: state.tokenInterface.finishMinting,
  increaseApproval: state.tokenInterface.increaseApproval,
  mint: state.tokenInterface.mint,
  mintingFinished: state.tokenInterface.mintingFinished,
  owner: state.tokenInterface.owner,
  symbol: state.tokenInterface.symbol.value,
  transfer: state.tokenInterface.transfer,
  transferFrom: state.tokenInterface.transferFrom,
  transferOwnership: state.tokenInterface.transferOwnership
})

const mapDispatch = (state) => ({
  onChangeAllowance: (e, { name, value }) =>
    dispatch.tokenInterface.setAllowance({ [name]: value }),
  onSubmitAllowance: async () =>
    dispatch.tokenInterface.allowance(),
  onChangeBalanceOf: (e, { name, value }) =>
    dispatch.tokenInterface.setBalanceOf({ [name]: value }),
  onSubmitBalanceOf: async () =>
    dispatch.tokenInterface.balanceOf(),
  onChangeDecreaseApproval: (e, { name, value }) =>
    dispatch.tokenInterface.setDecreaseApproval({ [name]: value }),
  onSubmitDecreaseApproval: async () =>
    dispatch.tokenInterface.decreaseApproval(),
  onChangeFinishMinting: (e, { name, value }) =>
    dispatch.tokenInterface.setFinishMinting({ [name]: value }),
  onSubmitFinishMinting: async () =>
    dispatch.tokenInterface.finishMinting(),
  onChangeIncreaseApproval: (e, { name, value }) =>
    dispatch.tokenInterface.setIncreaseApproval({ [name]: value }),
  onSubmitIncreaseApproval: async () =>
    dispatch.tokenInterface.increaseApproval(),
  onChangeMint: (e, { name, value }) =>
    dispatch.tokenInterface.setMint({ [name]: value }),
  onSubmitMint: async () =>
    dispatch.tokenInterface.mint(),
  onChangeTransfer: (e, { name, value }) =>
    dispatch.tokenInterface.setTransfer({ [name]: value }),
  onSubmitTransfer: async () =>
    dispatch.tokenInterface.transfer(),
  onChangeTransferFrom: (e, { name, value }) =>
    dispatch.tokenInterface.setTransferFrom({ [name]: value }),
  onSubmitTransferFrom: async () =>
    dispatch.tokenInterface.transferFrom(),
  onChangeTransferOwnership: (e, { name, value }) =>
    dispatch.tokenInterface.setTransferOwnership({ [name]: value }),
  onSubmitTransferOwnership: async () =>
    dispatch.tokenInterface.transferOwnership()
})

export default connect(mapState, mapDispatch)(TokenContractInterface)
