import React, { Component } from 'react'
import { Divider, Form, Menu, Header, Segment } from 'semantic-ui-react'

class TokenInterface extends Component {
  render () {
    return (
      <Segment>
        <Header as='h2' content='Balrog Coin' />
        <Menu widths={5} secondary>
          <Menu.Item>
            BLRG
          </Menu.Item>
          <Menu.Item>
            1,000,000 Total
          </Menu.Item>
          <Menu.Item>
            18 Decimals
          </Menu.Item>
          <Menu.Item>
            Owner: 0x123456
          </Menu.Item>
          <Menu.Item>
            Minting
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
  // render () {
  //   return (
  //     <Card fluid>
  //       <Card.Content header='BLRG - Balrog Coin' meta='Deployed 13 minutes ago' />
  //       <Card.Content content='Description goes here' />
  //       <Card.Content>
  //         <Header sub>
  //           BLRG
  //         </Header>
  //       </Card.Content>
  //     </Card>
  //   )
  // }
}

export default TokenInterface
