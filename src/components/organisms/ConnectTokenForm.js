import React, { Component } from 'react'
import { Form, Header, Segment } from 'semantic-ui-react'

class ConnectTokenForm extends Component {
  render () {
    const {
      onChange,
      onSubmit,
      loading,
      disabled,
      visible,
      address
    } = this.props

    if (visible === false) return null

    return (
      <Segment disabled={disabled} loading={loading}>
        <Header as='h3' icon='plug' content='Connect To Contract' />
        <p>Connect to an existing contract on the blockchain.</p>
        <Form onSubmit={onSubmit}>
          <Form.Input
            label='Contract Address'
            name='address'
            placeholder='0x'
            value={address}
            onChange={onChange}
          />
          <Form.Button content='Connect to Contract' primary />
        </Form>
      </Segment>
    )
  }
}

export default ConnectTokenForm
