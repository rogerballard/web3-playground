/**
 * Import dependencies
 */
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

import Web3Instance from '../molecules/Web3Instance'

/**
 * Define Menu component
 * @extends Component
 */
class AppMenu extends Component {
  /**
   * Render the component
   */
  render () {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <Link to='/'>DAICO Test Page</Link>
          </Menu.Item>
          {this._renderMenuItems()}
          <Menu.Item position='right'>
            <Web3Instance />
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
  /**
   * Render the menu items
   * @return {JSX}
   */
  _renderMenuItems () {
    const { pathname } = this.props.location
    const menuData = [
      { name: 'Token', route: '/token' },
      { name: 'Crowdsale', route: '/crowdsale' }
    ]
    return menuData.map(item => this._renderMenuItem(item, pathname))
  }
  /**
   * Render a single menu item
   * @param  {String} name  The name of the menu item
   * @param  {String} route The route to navigate to on click
   * @return {JSX}
   */
  _renderMenuItem ({ name, route }, pathname) {
    return (
      <Link to={route} key={route}>
        <Menu.Item
          active={pathname === route}
          style={styles.menuItem}>
          {name}
        </Menu.Item>
      </Link>
    )
  }
}

/**
 * Define styles
 * @type {Object}
 */
const styles = {
  menuItem: {
    paddingBottom: '1.25em',
    paddingTop: '1.25em'
  }
}

/**
 * Wrap the AppMenu component with the router to access the current route
 */
export default withRouter(props => <AppMenu {...props} />)
