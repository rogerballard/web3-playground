import { connect } from 'react-redux'

import AppBar from '../organisms/AppBar'

const mapState = (state) => ({
  network: state.provider.network
})

export default connect(mapState)(AppBar)
