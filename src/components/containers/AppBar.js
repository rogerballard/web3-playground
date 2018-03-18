import { connect } from 'react-redux'

import AppBar from '../organisms/AppBar'

const mapState = (state) => ({
  address: state.account.address || 'Loading...',
  balance: state.account.balance || 'Loading...'
})

export default connect(mapState)(AppBar)
