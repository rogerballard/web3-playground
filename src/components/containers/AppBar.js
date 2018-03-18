import { connect } from 'react-redux'

import AppBar from '../organisms/AppBar'

const mapState = (state) => ({
  type: state.provider.type
})

export default connect(mapState)(AppBar)
