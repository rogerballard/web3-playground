import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react'

import Blocky from '../atoms/Blocky'

class AppBar extends Component {
  render () {
    const { address, balance } = this.props

    return (
      <Menu fixed='top'>
        <Container>
          <Menu.Item header>
            <Link to='/'>Web3 Playground</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/instructions'>Instructions</Link>
          </Menu.Item>
          <Dropdown item text='Contracts'>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to='/contracts/token'>Token</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <a href='https://github.com/rogerballard/web3-playground'>
              <Icon name='github' size='large' />
            </a>
          </Menu.Item>
          {
            address ?
              <Menu.Menu position='right'>
                <Menu.Item content={parseFloat(balance).toFixed(3) + ' ETH'} />
                <Menu.Item content={<Blocky data={address} />} />
              </Menu.Menu>
              :
              <Menu.Menu position='right'>
                <Menu.Item content='Unlock MetaMask' icon='warning' />
              </Menu.Menu>
          }
        </Container>
      </Menu>
    )
  }
}

export default AppBar
