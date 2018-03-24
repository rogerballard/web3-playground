import { connect } from 'react-redux'

import TokenDetail from '../organisms/TokenDetail'

const mapState = (state) => ({
  name: state.tokenContract.name,
  symbol: state.tokenContract.symbol,
  decimals: state.tokenContract.decimals,
  totalSupply: state.tokenContract.totalSupply,
  owner: state.tokenContract.owner,
  mintingFinished: state.tokenContract.mintingFinished
})

export default connect(mapState)(TokenDetail)
