import { connect } from 'react-redux'

import TokenDetail from '../organisms/TokenDetail'

const mapState = (state) => ({
  name: state.tokenContract.data.name,
  symbol: state.tokenContract.data.symbol,
  decimals: state.tokenContract.data.decimals,
  totalSupply: state.tokenContract.data.totalSupply,
  owner: state.tokenContract.data.owner,
  mintingFinished: state.tokenContract.data.mintingFinished,
  visible: state.tokenContract.instance !== null
})

export default connect(mapState)(TokenDetail)
