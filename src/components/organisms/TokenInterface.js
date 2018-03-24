import React, { Component } from 'react'
import { Divider, Form, Header } from 'semantic-ui-react'

class TokenInterface extends Component {
  render () {
    return (
      <div>
        <Form>
          <Header
            as='h3'
            content='Mint'
            subheader='Create and send an amount of tokens to the recipient.'
          />
          <Form.Group>
            <Form.Input
              label='Amount'
              name='amount'
              placeholder='1,000'
            />
            <Form.Input
              label='Recipient'
              name='recipient'
              placeholder='Address'
            />
          </Form.Group>
          <Form.Button content='Mint' />
        </Form>
        <Divider />
        <Form>
          <Header
            as='h3'
            content='Finish Minting'
            subheader='End the minting phase.'
          />
          <Form.Button content='Finish Minting' />
        </Form>
        <Divider />
        <Form>
          <Header
            as='h3'
            content='Transfer'
            subheader='Transfer tokens to a recipient'
          />
          <Form.Group>
            <Form.Input
              label='Amount'
              name='amount'
              placeholder='1,000'
            />
            <Form.Input
              label='Recipient'
              name='recipient'
              placeholder='Address'
            />
          </Form.Group>
          <Form.Button content='Transfer' />
        </Form>
      </div>
    )
  }
}

export default TokenInterface
