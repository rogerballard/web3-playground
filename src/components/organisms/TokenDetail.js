import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

class TokenDetail extends Component {
  items () {
    return [
      {
        icon: 'cubes',
        header: 'BLRG - Balrog coin',
        description: '18 decimals'
      },
      {
        icon: 'user',
        header: '0x12345...',
        description: 'Contract owner'
      },
      {
        icon: 'circle outline',
        header: '1,000,000',
        description: 'Total supply'
      },
      {
        icon: 'wizard',
        header: 'Minting in progress',
        description: 'New tokens can be created'
      }
    ]
  }
  render () {
    return (
      <List items={this.items()} relaxed='very' />
    )
  }
}

export default TokenDetail
