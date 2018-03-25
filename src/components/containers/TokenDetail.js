import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'

import TokenDetail from '../organisms/TokenDetail'

const mapState = (state) => ({
  name: state.tokenContract.data.name,
  symbol: state.tokenContract.data.symbol,
  decimals: state.tokenContract.data.decimals,
  totalSupply: state.tokenContract.data.totalSupply,
  owner: state.tokenContract.data.owner,
  mintingFinished: state.tokenContract.data.mintingFinished,
  contractAddress: state.tokenContract.data.contractAddress,
  visible: state.tokenContract.instance !== null,
  loading: state.tokenContract.data.loading
})

const mapDispatch = (state) => ({
  fetchData: () => dispatch.tokenContract.initData()
})

export default connect(mapState, mapDispatch)(TokenDetail)
