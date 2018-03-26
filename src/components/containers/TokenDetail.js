import { connect } from 'react-redux'
import { dispatch } from '@rematch/core'
import { select } from '@rematch/select'

import store from '../../utils/store'
import TokenDetail from '../organisms/TokenDetail'

const mapState = (state) => ({
  contractAddress: state.tokenContract.instance.options.address,
  decimals: state.tokenInterface.decimals.value,
  mintingFinished: state.tokenInterface.mintingFinished.value,
  name: state.tokenInterface.name.value,
  owner: state.tokenInterface.owner.value,
  symbol: state.tokenInterface.symbol.value,
  totalSupply: state.tokenInterface.totalSupply.value,
  loading: select.tokenInterface.loadingBasicData(store.getState())
})

const mapDispatch = (state) => ({
  fetchData: () => dispatch.tokenInterface.loadBasicData()
})

export default connect(mapState, mapDispatch)(TokenDetail)
