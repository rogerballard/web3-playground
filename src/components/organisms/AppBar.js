import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

import Account from '../molecules/Account'

class AppBar extends Component {
  render () {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <Link to='/'>Web3 Playground</Link>
          </Menu.Item>
          <Menu.Item position='right'>
            <Account />
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default AppBar
