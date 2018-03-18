import { connect } from 'react-redux'

import AppBar from '../organisms/AppBar'

const mapState = (state) => {
  let web3 = state.web3.instance
  return {
    address: state.account.address || 'Loading...',
    balance: web3 ? web3.utils.fromWei(state.account.balance, 'ether') : 'Loading...'
  }
}

export default connect(mapState)(AppBar)
