import { connect } from 'react-redux'

import AppBar from '../organisms/AppBar'

const mapState = (state) => ({
  address: '0x12355'
})

export default connect(mapState)(AppBar)
