import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'

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

    if (!visible) return null

    return (
      <div >
        <Header as='h3' icon='plug' content='Connect To Contract' />
        <p>Connect to an existing contract on the blockchain.</p>
        <Form onSubmit={onSubmit} loading={loading} disabled={disabled}>
          <Form.Input
            label='Contract Address'
            name='address'
            placeholder='0x....'
            value={address}
            onChange={onChange}
          />
          <Form.Button content='Connect to Contract' primary />
        </Form>
      </div>
    )
  }
}

export default ConnectTokenForm
