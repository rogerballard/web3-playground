import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react'

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
            About
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
              Source Code
            </a>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item icon='sitemap' />
            <Menu.Item content={balance + ' ETH'} />
            <Menu.Item content={address} />
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default AppBar
